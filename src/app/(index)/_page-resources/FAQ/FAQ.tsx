import ContentWrapper from "@/shared/components/ContentWrapper";
import Grid from "@/shared/components/Icons/Carbon/Grid";
import HealthCross from "@/shared/components/Icons/Carbon/HealthCross";
import Money from "@/shared/components/Icons/Carbon/Money";
import Time from "@/shared/components/Icons/Carbon/Time";

import Expandable from "./Expandable";
import FAQPlant from "./FAQPlant";

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden">
      <FAQPlant className="absolute left-10 top-0 hidden min-[1300px]:block" />
      <ContentWrapper element="div" className="my-32 max-w-[700px]">
        <h3 className="text-center text-5xl text-nandor-900 md:text-6xl lg:text-8xl">Dúvidas frequentes</h3>
        <div className="mt-14 flex flex-col gap-4">
          <Expandable
            title="Quanto tempo dura uma sessão? "
            text="Uma sessão dura entre 40 a 50 minutos e sua frequência costuma ser semanal."
            icon={<Time className="h-6 w-6" />}
          />
          <Expandable
            title="Aceita convênios/plano de saúde?"
            text="Não trabalho com convênios, apenas particular. Os valores são acordados entre nós durante as primeiras sessões e depois emito recibo que podem ser usados para solicitação de reembolso. "
            icon={<HealthCross className="h-6 w-6" />}
          />
          <Expandable title="Quais as formas de pagamento?" text="O pagamento das sessões pode ser realizado por PIX ou dinheiro." icon={<Money className="h-6 w-6" />} />

          <Expandable
            title="As sessões online são feitas por meio de qual plataforma? "
            text="As sessões online costumam ser feitas através da plataforma do Google Meet e o link para acessá-lo é enviado sempre na hora da sessão. Caso não seja possível ou acessível as sessões tambem podem ser feitas através da vídeo chamada do WhatsApp.  "
            icon={<Grid className="h-6 w-6" />}
          />
        </div>
      </ContentWrapper>
    </section>
  );
}
