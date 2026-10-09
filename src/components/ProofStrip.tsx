import { farmStats } from '../data/site';

const proofItems = [
  { value: String(farmStats.acres), label: 'ACRES UNDER CULTIVATION' },
  { value: '6', label: 'CROPS' },
  { value: String(farmStats.yearsOfFarming), label: 'YEARS OF FARMING' },
  { value: String(farmStats.teamMembers), label: 'PEOPLE ON THE TEAM' },
];

interface ProofStripProps {
  dark?: boolean;
}

export default function ProofStrip({ dark = false }: ProofStripProps) {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4"
      style={{ borderColor: dark ? 'rgba(220,227,210,0.2)' : '#DCE3D2' }}
    >
      {proofItems.map((item, i) => (
        <div
          key={i}
          className={`py-5 px-6 text-center ${i % 2 === 1 ? 'border-l' : i > 0 ? 'lg:border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''}`}
          style={{ borderColor: dark ? 'rgba(220,227,210,0.2)' : '#DCE3D2' }}
        >
          <div
            className="font-display text-2xl font-semibold mb-1"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              color: dark ? '#FBFAF5' : '#16211A',
            }}
          >
            {item.value}
          </div>
          <div
            className="font-mono text-[10px] uppercase tracking-[0.14em]"
            style={{ color: dark ? '#CAA549' : '#4B584F' }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
