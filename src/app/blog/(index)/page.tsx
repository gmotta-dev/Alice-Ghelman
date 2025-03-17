import AliceBanner from "./_page-resources/AliceBanner/AliceBanner";
import Articles from "./_page-resources/Articles";
import Introduction from "./_page-resources/Introduction";

export default function Blog() {
  return (
    <main>
      <Introduction
        img="/images/artigo-1.png"
        title="PSICOLOGIA OU PSICANÁLISE?"
        tag="Bem estar"
        description="Muitos pacientes perguntam sobre a diferença entre a psicologia e a psicanálise. A psicanálse é um campo amplo do conhecimento e engloba diferentes correntes teóricas que buscam compreender, cada qual à sua maneira, como..."
        date="17 de março de 2025"
      />
      <AliceBanner />
      <Articles />
    </main>
  );
}
