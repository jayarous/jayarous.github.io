# Create a GST invoice with a UPI QR code on your phone (India)

Canonical: [Create a GST invoice with a UPI QR code on your phone (India)](https://jayarous.github.io/guides/gst-invoice-app-india-upi-qr/)

Locale: en

Purpose: Guide: How to create a GST invoice with a UPI QR code

Content updated: 2026-11-17

Source revision: 2026-11-17-seo-1

Maintenance owner: Jayarous Antony KS

[Topic map](https://jayarous.github.io/llm/topics/guides.md) · [Complete scoped map](https://jayarous.github.io/sitemap.md)

# How to create a GST invoice with a UPI QR code on your phone

BillGen has an India invoice format. It splits tax into CGST and SGST or charges IGST based on the customer's state, prints HSN and SAC codes, and puts a UPI scan-to-pay QR code on unpaid invoices.

By Jayarous Antony KS, developer of BillGen. Published 17 November 2026.

## Set it up

1. In Settings, open Company profile and enter your legal name, address and tax number, and choose the India country rules.
2. Add your UPI ID in the Company profile. It is optional and should look like name@bank.
3. In Settings, open Taxes, add the GST rates you charge and choose the default.
4. On each product, add the HSN code for goods or the SAC code for services.
5. On each customer, enter the State or region. It decides whether tax is split into CGST and SGST or charged as IGST.

## Create the invoice

1. Tap New order on the Dashboard, pick a customer and add the line items.
2. Create the invoice. With the India rules selected, BillGen checks that it has what is required before it is issued.
3. Open the invoice and choose View PDF, then share or print it, or send it by WhatsApp or email.

BillGen has tax invoice, bill of supply and credit note layouts. A bill of supply carries no tax lines.

## The UPI QR code

When your company has a UPI ID, unpaid invoices show a QR code with the caption "Scan to pay with any UPI app". The customer scans it from the PDF or the printout and pays the amount due. When the money arrives, open the invoice and record the payment with UPI as the method.

## Tax report

Open Reports to export a tax report as a CSV file, to help prepare your GST return. BillGen keeps records; it is not tax or financial advice. Check the figures with your accountant before filing.

## Common questions

### Does BillGen file GST returns or generate e-invoices on the government portal?

No. BillGen creates invoices and PDFs on your phone and can export a tax report as CSV. It does not submit anything to a government portal.

### Do I need a UPI ID to use BillGen?

No. The UPI ID is optional. Without it, invoices are issued without the scan-to-pay QR code.

### Can I issue a bill of supply?

Yes. BillGen has a bill of supply layout, which carries no tax lines.

### Is BillGen free?

The free plan covers one company and up to 3 new invoices a day. Pro is a subscription that removes the limit.

BillGen page: https://jayarous.github.io/apps/billgen/
BillGen on Google Play: https://play.google.com/store/apps/details?id=com.billgen.app
