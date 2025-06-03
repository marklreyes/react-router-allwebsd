import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
    }

    console.log("Contact form submission received");

    // Parse form data
    const contentType = event.headers["content-type"] || "";
    let formData: Record<string, string> = {};

    if (contentType.includes("application/x-www-form-urlencoded")) {
      // Parse URL-encoded form data
      const body = event.body || "";
      const params = new URLSearchParams(body);
      for (const [key, value] of params.entries()) {
        formData[key] = value;
      }
    } else if (contentType.includes("application/json")) {
      // Parse JSON data
      formData = JSON.parse(event.body || "{}");
    } else {
      throw new Error("Unsupported content type");
    }

    console.log("Form data received:", Object.keys(formData));

    // Extract and validate form fields
    const { name, email, subject, message, "bot-field": botField } = formData;

    // Check honeypot field for spam protection
    if (botField) {
      console.log("Spam detected - honeypot field filled");
      return { statusCode: 400, body: JSON.stringify({ error: "Spam detected" }) };
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("Missing required fields");
      return { statusCode: 400, body: JSON.stringify({ error: "All fields are required" }) };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email format");
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid email format" }) };
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().replace(/[<>]/g, ''),
      email: email.trim().replace(/[<>]/g, ''),
      subject: subject.trim().replace(/[<>]/g, ''),
      message: message.trim().replace(/[<>]/g, '')
    };

    console.log("Data sanitized, attempting submission");

    // Get the site URL from context
    const siteUrl = process.env.URL || event.headers.origin || 'https://allwebsd.com';

    // Submit to Netlify Forms using the site's form endpoint
    const formSubmissionBody = new URLSearchParams({
      "form-name": "contact",
      name: sanitizedData.name,
      email: sanitizedData.email,
      subject: sanitizedData.subject,
      message: sanitizedData.message
    });

    console.log("Submitting to Netlify Forms at:", `${siteUrl}/`);

    const formSubmission = await fetch(`${siteUrl}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formSubmissionBody.toString()
    });

    console.log("Netlify Forms response status:", formSubmission.status);

    if (!formSubmission.ok) {
      const responseText = await formSubmission.text();
      console.log("Netlify Forms response:", responseText);
      throw new Error(`Netlify Forms submission failed: ${formSubmission.status}`);
    }

    console.log("Form submitted successfully");

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      })
    };

  } catch (error) {
    console.error("Contact form submission error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to submit form. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error"
      })
    };
  }
};
