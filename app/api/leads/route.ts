import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ['name', 'phone'];
    if (required.some((key) => !body[key])) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = process.env.GOOGLE_SHEET_RANGE || 'Leads!A:M';

    if (!email || !privateKey || !spreadsheetId) {
      return NextResponse.json({ error: 'Lead database not configured' }, { status: 503 });
    }

    const auth = new google.auth.JWT({
      email,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const now = new Date().toISOString();
    const leadId = `PNGHR-${Date.now()}`;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          leadId,
          now,
          body.name || '',
          body.company || '',
          body.phone || '',
          body.email || '',
          body.service || '',
          body.source || 'Website',
          body.campaign || '',
          'New',
          '',
          '',
          body.message || ''
        ]]
      }
    });

    return NextResponse.json({ ok: true, leadId });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
