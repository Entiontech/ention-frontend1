const services = [
    "Select Service",
    "Sole Proprietorship",
    "Partnership Firm",
    "OPC",
    "LLP",
    "Private Limited Company",
    "Public Limited Company",
    "Producer Company",
    "Nidhi Company",
    "Startup Registration",
    "MSME registration",
    "FSSAI registration",
    "BIS registration",
    "Iso certification",
    "Shop and establishment",
    "PF registration",
    "ESI registration",
    "IEC registration",
    "Trademark search report",
    "Trademark registration",
    "Reply to objection",
    "Trademark renewal",
    "Trademark watch",
    "Assignment of Trademark",
    "Conversion of proprietorship into company",
    "Conversion of partnership firm into company",
    "Conversion of OPC into company",
    "Conversion of LLP into company",
    " PAN and TAN",
    " GST registration",
    "GST Return",
    "ITR",
    "TDS Return",
    "Society registration ",
    "Trust registration",
    "Sec 8 company registration",
    "Darpan Registration",
    "Sec 12A and Sec80G registration ",
    "Patent Search",
    "Patent Provisional Application",
    "Patent Permanent Application",
    "Copy Right Registration",



];
  
export default services;

// Review API functions
export async function fetchReviews(productId) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ention-backend.onrender.com'}/api/reviews?productId=${encodeURIComponent(productId)}`);
  if (!res.ok) throw new Error('Failed to fetch reviews');
  const data = await res.json();
  return data.reviews;
}

export async function submitReview(formData) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://ention-backend.onrender.com'}/api/reviews`, {
    method: 'POST',
    body: formData
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Failed to submit review');
  }
  return (await res.json()).review;
}