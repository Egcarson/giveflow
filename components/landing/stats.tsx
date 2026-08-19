import Container from "../shared/container";
import CountUp from "../shared/count-up";

const stats = [
  {
    value: 10000,
    label: "Participants",
    suffix: "+",
  },
  {
    value: 500,
    label: "Campaigns",
    suffix: "+",
  },
  {
    value: 98,
    label: "Verified Entries",
    suffix: "%",
  },
  {
    value: 250,
    label: "Brands",
    suffix: "+",
  },
];

export default function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-[28px]
                border
                border-slate-100
                bg-white
                p-8
                text-center
                shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <h3 className="text-4xl font-black text-violet-600">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </h3>

              <p className="mt-3 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
