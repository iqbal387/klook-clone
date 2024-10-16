"use client";

import Image from "next/image";
import {
  Buy,
  ChevronDown,
  Bookmark,
  Location,
  Search,
  User,
} from "react-iconly";
import Link from "next/link";

import Container from "@/components/atoms/Container";

import { color } from "@/constan";

import { menu } from "@/data/menu";

const Navbar = () => (
  <nav className="sticky top-0 left-0 z-50 bg-neutral-10">
    <div className="w-full border-b">
      <Container className="h-[4.5rem] flex items-center justify-between gap-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/images/logo/klook.svg"
            alt="Klook"
            width={124}
            height={32}
            sizes="192px"
            style={{
              objectFit: "contain",
            }}
          />
        </Link>

        <div className="relative md:72 lg:w-96 hidden md:block">
          <input
            className="w-full py-3 pl-5 pr-14 border border-neutral-300 rounded-full shadow"
            placeholder="Cari destinasi atau aktivitas"
          />

          <div className="absolute top-2 right-2 p-2 rounded-full bg-primary-hover">
            <Search primaryColor={color.primary.main} size="small" />
          </div>
        </div>

        <div className="flex items-center gap-x-1.5">
          <div className="hidden sm:flex items-center gap-1.5 p-2.5 rounded-lg cursor-pointer hover:bg-primary-hover">
            <Image
              src="/images/language/indonesia.png"
              alt="Indonesia"
              width={24}
              height={24}
              sizes="24px"
              style={{
                objectFit: "contain",
              }}
              className="text-primary-main border border-neutral-70"
            />

            <ChevronDown size="small" />
          </div>

          <div className="hidden sm:flex items-center gap-1.5 p-2.5 rounded-lg cursor-pointer hover:bg-primary-hover">
            <p>IDR</p>

            <ChevronDown size="small" />
          </div>

          <div className="hidden sm:block p-2.5 rounded-full cursor-pointer hover:bg-primary-hover">
            <Bookmark />
          </div>

          <div className="hidden sm:block p-2.5 rounded-full cursor-pointer hover:bg-primary-hover">
            <Buy />
          </div>

          <div className="ml-1 py-1.5 px-2 flex items-center gap-2 rounded-full border border-divider-border cursor-pointer hover:shadow-md">
            <div className="p-1.5 rounded-full">
              <Image
                src="/icon/menu.svg"
                alt="Menu"
                width={20}
                height={20}
                sizes="24px"
                style={{
                  objectFit: "contain",
                }}
                className="text-primary-main"
              />
            </div>

            <div className="p-1 rounded-full bg-neutral-70">
              <User set="bold" size="medium" primaryColor="#FFF" />
            </div>
          </div>
        </div>
      </Container>
    </div>

    <div className="w-full border-b">
      <Container className="py-2.5 flex justify-start sm:justify-center items-center gap-x-2.5 overflow-x-auto">
        <div className="text-neutral-700 font-medium flex items-center gap-2 py-2 px-2 md:px-4 rounded-md cursor-pointer hover:bg-primary-hover hover:text-primary-main">
          <Location
            set="bulk"
            primaryColor={color.primary.surface}
            secondaryColor={color.primary.surface}
            stroke="bold"
            size="medium"
          />

          <p className="whitespace-nowrap">Explore destinations</p>
        </div>

        {menu.map(({ label, icon }, index) => (
          <div
            key={index}
            className="text-neutral-700 font-medium flex items-center gap-2 py-2 px-2 md:px-4 rounded-md cursor-pointer hover:bg-primary-hover hover:text-primary-main"
          >
            {icon}

            <p className="whitespace-nowrap">{label}</p>
          </div>
        ))}
      </Container>
    </div>
  </nav>
);

export default Navbar;
