import styles from "./about-us.module.css";

const itemListing = [
  {
    title: "Comunidade",
    description:
      "Juntos fazemos mais, por isso nos esforçamos em criar uma comunidade que exista diálogo, amizade, respeito e suporte. Todos são bem vindos, seja para contribuir, sugerir novas ideias ou pedir ajuda",
    svg: "Comunidade",
  },
  {
    title: "Open Source",
    description:
      "Open Source permite que qualquer pessoa possa ver, modificar, contribuir e distribuir seu código. Adotamos o Open Source como filosofia pois acreditamos que é isso que nos conecta, todos nossos projetos são Open Source e queremos espalhar essa cultura pela UFCG e quem sabe até fora dela.",
    svg: "OpenSource",
  },
  {
    title: "Empoderamento",
    description:
      "Queremos empoderar pessoas, do iniciante ao experiente, todos podem aprender, sugerir e ajudar na OpenDevUFCG. Queremos ser a comunidade que possa encorajar pessoas a tomarem o primeiro passo, a sugerir novas ideias e principalmente, a contruí-las.",
    svg: "Empoderamento",
  },
];

export default function AboutUs() {
  return (
    <section className={styles.fsAboutUs}>
      <h2>Sobre nós</h2>
      <p>
        Somos uma comunidade voltada a incentivar a cultura open source no curso
        de Ciência da Computação da UFCG.
      </p>
      <div className={styles.fsAboutUsCarousel}>
        {itemListing.map((item, index) => {
          return (
            <div key={index} className={styles.fsAboutUsCarouselItem}>
              <svg>
                <use href={`/about-us-icons.svg#${item.svg}`} />
              </svg>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
