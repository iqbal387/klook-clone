import Image from "next/image";

import Container from "@/components/atoms/Container";

import { benefit } from "@/data/benefit";

const BenefitSection = () => (
  <section className="section">
    <Container className="grid gap-10">
      <h1 className="tracking-wide">Keuntungan menggunakan Turisme</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {benefit.map(({ title, description, image }, index) => (
          <div key={`benefit-${index}`} className="grid gap-2">
            <Image
              src={image}
              alt={title}
              width={56}
              height={56}
              sizes="96px"
              style={{ objectFit: "contain" }}
            />

            <h2 className="mt-3 text-xl font-medium">{title}</h2>

            <p className="text-neutral-80">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default BenefitSection;
