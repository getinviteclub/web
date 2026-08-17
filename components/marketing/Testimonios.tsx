import { TESTIMONIOS } from "@/content/testimonios"
import { Avatar } from "@/components/ui/avatar"
import { Reveal } from "@/components/ui/reveal"
import { Eyebrow } from "@/components/ui/eyebrow"

export function Testimonios() {
  return (
    <section id="testimonios" className="px-[var(--pad-x)] py-8">
      <div className="mx-auto max-w-max rounded-none bg-clay px-7 py-16 md:px-14 md:py-24">
        <Reveal from="left" className="mb-10 max-w-[52ch] md:mb-14">
          <Eyebrow>
            Testimonios
          </Eyebrow>
          <h2
            className="mt-4 font-display font-normal leading-[1.05]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Parejas que ya lo usaron
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIOS.map((testimonio, i) => (
            <Reveal key={testimonio.author + testimonio.quote} from={i % 2 === 0 ? "left" : "right"}>
              <figure className="flex h-full flex-col justify-between rounded-none bg-bone p-7">
                <blockquote className="text-lg leading-relaxed">
                  &ldquo;{testimonio.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <Avatar
                    name={testimonio.author}
                    src={testimonio.avatar}
                    className="bg-forest text-inverse"
                  />
                  <span className="flex flex-col">
                    <strong className="text-sm font-semibold">
                      {testimonio.author}
                    </strong>
                    <span className="text-sm text-ink/70">{testimonio.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
