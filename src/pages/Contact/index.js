import { Section, Box, FormContainer, Title, Form } from './style.js';
import Navbar from "../../components/Navbar/index.js"

function Contact() {
  return (
    <>
      <Section>
        <Box>
            <h2>Transforme sua gestão financeira e impulsione o crescimento das suas lojas ou franquias de forma integrada e inteligente.</h2>
            <p>Perfeito para franqueados e varejistas com 3 ou mais lojas otimizarem a produtividade e obterem uma visão completa e integrada do negócio com o F360 Finanças.</p>
        </Box>
        <Box>
            <FormContainer>
                <Title>Não perca tempo, agende sua demonstração grátis e conheça todos os recursos do F360 Finanças.</Title>
                <Form>
                    <label>Se enquadra como*</label>
                    <div>
                    <input type="radio" id="pf" name="tipo" value="Pessoa Física" />
                    <label htmlFor="pf">Pessoa Física</label>
                    <input type="radio" id="pj" name="tipo" value="Pessoa Jurídica" style={{ marginLeft: "20px" }} />
                    <label htmlFor="pj">Pessoa Jurídica</label>
                    </div>

                    <label>Nome*</label>
                    <input type="text" placeholder="Digite seu nome" />

                    <label>E-mail Corporativo*</label>
                    <input type="email" placeholder="Digite seu e-mail" />

                    <label>Celular*</label>
                    <input type="tel" placeholder="Digite seu celular" />

                    <label>Empresa*</label>
                    <input type="text" placeholder="Digite o nome da empresa" />

                    <label>Quantas lojas você tem?*</label>
                    <input type="number" placeholder="Digite o número de lojas" />

                    <label>Faturamento mensal da empresa*</label>
                    <select>
                    <option>Escolha o valor</option>
                    <option>Até R$ 100 mil</option>
                    <option>De R$ 100 mil a R$ 500 mil</option>
                    <option>Mais de R$ 500 mil</option>
                    </select>

                    <button type="submit">Enviar</button>

                    <p>Ao enviar o formulário de contato, você concorda com o disposto em nossa Política de Privacidade.</p>
                </Form>
            </FormContainer>
        </Box>
      </Section>
    </>
  );
}

export default Contact;
