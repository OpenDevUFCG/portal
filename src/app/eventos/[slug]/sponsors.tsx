/* eslint-disable @next/next/no-img-element */
import { Sponsor } from "@/interfaces/Events";
import { resolveImagePath } from "@/utils/image";

type SponsorCardProps = {
  sponsor: Sponsor;
};

const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  return (
    <div className="sponsor-card">
      <a href={sponsor.link} target="_blank">
        <img
          width={100}
          height={100}
          src={resolveImagePath(sponsor.logo)}
          alt={`logo do patrocionador ${sponsor.name}`}
        />
      </a>
      <p>{sponsor.name}</p>
    </div>
  );
};

type SponsorsSectionProps = {
  sponsors: Sponsor[];
};

const SponsorsSection = ({ sponsors }: SponsorsSectionProps) => {
  return (
    <div className="section-box">
      <h2 className="section-title">PATROCÍNIO</h2>
      <div className="sponsors-list">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
