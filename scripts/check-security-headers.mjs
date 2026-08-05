const target = process.env.SECURITY_CHECK_URL ?? "http://127.0.0.1:3000";

const requiredHeaders = [
  "content-security-policy",
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "permissions-policy"
];

const response = await fetch(target, { redirect: "manual" });
const missing = requiredHeaders.filter((header) => !response.headers.has(header));

if (!response.ok) {
  throw new Error(`Security check failed: ${target} returned HTTP ${response.status}`);
}

if (missing.length > 0) {
  throw new Error(`Security check failed: missing headers ${missing.join(", ")}`);
}

console.log(`Security headers verified at ${target}.`);
