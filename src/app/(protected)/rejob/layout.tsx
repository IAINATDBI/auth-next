export default function RejobLayout({ 
  children 
}: { 
  children: React.ReactNode
}) {
  return (
    <div className="rejob-specific-wrapper">
      {children}
    </div>
  )
}
