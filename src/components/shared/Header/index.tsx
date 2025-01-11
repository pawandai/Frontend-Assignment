import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Container from "../container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const components: { title: string; href: string }[] = [
  {
    title: "Crypto Taxes",
    href: "/",
  },
  {
    title: "Free Tools",
    href: "/",
  },
  {
    title: "Resource Center",
    href: "/",
  },
];

export function Header() {
  return (
    <header className="border-b">
      <Container className="w-full">
        <nav className="flex items-center justify-between px-2 py-4">
          <div>
            <Link href="/" className="p-2">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="inline-block"
              />
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden flex">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/" className="p-2">
                      <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="inline-block"
                      />
                    </Link>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul className="flex flex-col items-center justify-center">
                  {components.map((component, index) => (
                    <ListItem
                      key={index}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Get Started</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <div className="md:flex hidden items-center justify-center gap-4">
            <ul className="flex items-center justify-center">
              {components.map((component, index) => (
                <ListItem
                  key={index}
                  title={component.title}
                  href={component.href}
                />
              ))}
            </ul>
            <Button>Get Started</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, ...props }, ref) => {
  return (
    <li>
      <Link
        href={href || ""}
        ref={ref}
        className={cn(buttonVariants({ variant: "ghost" }), className)}
        {...props}
      >
        <span className={navigationMenuTriggerStyle()}>{title}</span>
      </Link>
    </li>
  );
});

ListItem.displayName = "ListItem";
