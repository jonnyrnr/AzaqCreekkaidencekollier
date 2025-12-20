import Link from "next/link";

interface BackNavProps {
  href?: string;
  bgColor?: string;
  label?: string;
}

export function BackNav({ 
  href = "/", 
  bgColor = "bg-blue-600",
  label = "← Back to Main Page" 
}: BackNavProps) {
  return (
    <div className={`${bgColor} text-white py-3 px-4 text-center`}>
      <Link href={href} className="hover:underline">
        {label}
      </Link>
    </div>
  );
}
