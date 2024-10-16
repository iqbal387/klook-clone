import Image from "next/image";
import Link from "next/link";

import Container from "@/components/atoms/Container";

import { footer } from "@/data/footer";
import { payment } from "@/data/payment";

const Footer = () => (
  <>
    <footer className="section border-y border-divider-border">
      <Container>
        <div className="flex flex-col sm:flex-row gap-y-6 gap-x-4 justify-between items-start">
          <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 items-start">
            {footer.map(({ title, menus }, index) => (
              <div key={`footer-${index}`} className="grid gap-4">
                <h4 className="uppercase">{title}</h4>

                <div className="grid gap-2.5">
                  {menus.map(({ label, url }, subIndex) => (
                    <Link
                      key={`footer-menu-${subIndex}`}
                      href={url}
                      className="text-neutral-70 hover:opacity-50"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="xl:w-96 flex justify-end">
            <div className="grid gap-4 lg:w-64 xl:w-72">
              <h4 className="uppercase">Metode Pembayaran</h4>

              <div className="flex gap-4 flex-wrap items-center">
                {payment.map(({ label, image, url }, index) => (
                  <a
                    key={`payment-${index}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={image}
                      alt={label}
                      width={40}
                      height={32}
                      sizes="40px"
                      style={{ objectFit: "contain" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>

    <div>
      <Container className="py-4">
        <p className="text-center text-neutral-80">
          © {new Date().getFullYear()} Turisme, Inc.
        </p>
      </Container>
    </div>
  </>
);

export default Footer;
