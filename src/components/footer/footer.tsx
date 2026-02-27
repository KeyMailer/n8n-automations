import { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  return (
    <div className="text-sm text-center text-gray-500 py-5 ">
      © {year} n8n automation. All rights reserved.
    </div>
  );
}
