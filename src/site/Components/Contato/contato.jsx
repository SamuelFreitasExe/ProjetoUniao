import React from 'react';
import './contato.css';

function Contato(){
    return (
        <>
      <section id="Contato">
        <header className="header banner-contato">
            <div className="header-content banner-contato-content">
                <h1>Vem com a gente</h1>
                <div>
                    <h5>Bem-vindo à nossa página de contatos, estamos aqui para ajudar! Se você tem alguma dúvida ou precisa de informações adicionais, há várias maneiras de entrar em contato conosco. Acreditamos que uma comunicação próxima e transparente com a comunidade é fundamental para manter um relacionamento de confiança e desenvolvimento. Não hesite em nos contatar!
                    </h5>
                </div>
            </div>
        </header>
        <section id="contato-web" className='box-pattern'>
            <h2 className="distance">Diretamente na página web</h2>
            <p>Preencha o formulário de contato abaixo, e nossa equipe receberá sua mensagem. Certifique-se de fornecer dados corretos e informações detalhadas para que possamos responder e atender às suas necessidades com precisão.</p>
            <form id="#" class="#" data-formid="1957" method="post" enctype="multipart/form-data" action="/contato/" data-token="#################" data-token-time="############" novalidate="novalidate">
                <div class="field-container">
                    <div id="field_1-container" class="field field-text" data-field-id="1">
                        <label class="field-label" for="field_1">Nome Completo <span class="required-label">*</span></label>
                        <input type="text" id="field_1" class="field-large field-required" name="wpforms[fields][1]" placeholder="Ex: João Guimarães Rosa" required=""/>
                    </div>
                    <div id="field_2-container" class="field field-email one-half first" data-field-id="2">
                        <label class="field-label" for="field_2">E-mail <span class="required-label">*</span></label>
                        <div class="field-row field-large">
                            <div class="field-row-block one-half first">
                                <input type="email" id="field_2" class="field-required field-email-primary" name="wpforms[fields][2][primary]" spellcheck="false" required=""/>
                                <label for="field_2" class="field-sublabel after">E-mail</label>
                            </div>
                            <div class="field-row-block one-half">
                                <input type="email" id="field_2-secondary" class="field-email-secondary field-required" data-rule-confirm="#field_2" name="wpforms[fields][2][secondary]" spellcheck="false" required=""/>
                                <label for="field_2-secondary" class="field-sublabel after">Confirmar e-mail</label>
                            </div>
                        </div>
                    </div>
                    <div id="field_3-container" class="field field-text one-half" data-field-id="3">
                        <label class="wpforms-field-label" for="field_3">Telefone</label>
                        <input type="text" id="field_3" class="field-large masked-input" data-rule-inputmask-incomplete="1" data-inputmask-mask="(99) 9999-9999[9]" name="wpforms[fields][3]" inputmode="text"/>
                    </div>
                    <div id="field_4-container" class="field field-select field-select-style-classic" data-field-id="4">
                        <label class="field-label" for="field_4">De onde falas?</label>
                        <select id="field_4" class="field-large" name="wpforms[fields][4]">
                            <option value="" class="placeholder" disabled="" selected="selected">Escolha um Estado</option>
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Espírito Santo">Espírito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
                            <option value="Distrito Federal">Distrito Federal</option>
                        </select>
                    </div>
                    <div id="field_6-container" class="field field-textarea" data-field-id="6">
                        <label class="field-label" for="1957-field_6">Sua mensagem <span class="required-label">*</span></label>
                        <textarea id="1957-field_6" class="#" name="[fields][6]" required=""></textarea>
                        <div class="field-description">Seja o mais descritivo possível</div>
                    </div>
                </div>
                <div class="#">
                    <button type="submit" name="#" id="submit-1957" class="submit meu-formulario-botao" data-alt-text="Enviando…" data-submit-text="Enviar" aria-live="assertive" value="submit">Enviar</button>
                </div>
            </form>
        </section>
        <div className='box-pattern'>
            <h1 className="distance">Redes Sociais</h1>
            <section id="instagram">
              <h2>Instagram Direct</h2>
              <div className="redes-box">
                <a className="redes-sociais" href="/#">
                  <img src="/Images/imgContato/Direct.gif" alt="Direct"/>
                </a>
                <p>Você pode nos enviar uma mensagem diretamente pelo Instagram. Nossa equipe está pronta para responder às suas perguntas e fornecer assistência imediata. Siga-nos em @klscorretoradeseguros e clique no botão de mensagem para iniciar a conversa.</p>
              </div>
            </section>

            <section id="facebook">
              <h2>Facebook</h2>
              <div className="redes-box">
                <a className="redes-sociais" href="/#">
                  <img src="/Images/imgContato/Facebook.png" alt="Facebook"/>
                </a>
                <p>Curta nossa página no Facebook e envie-nos uma mensagem pelo Facebook Messenger. Fique atualizado sobre nossas ofertas, notícias e informações importantes.</p>
              </div>
            </section>

            <section id="whatsapp">
                <h2>Whatsapp</h2>
                <div className="redes-box">
                    <a className="redes-sociais" href="/#">
                        <img src="/Images/imgContato/Zap.gif" alt="Whatsapp"/>
                    </a>
                    <p>Você também pode entrar em contato conosco pelo WhatsApp. Adicione nosso número +55 (00) 00000-0000 à sua lista de contatos e envie-nos uma mensagem ou clique na imagem ao lado que vos direcionará ao aplicativo. Estamos disponíveis para conversar e fornecer assistência através deste canal.</p>
                </div>
            </section>
            <p>Independentemente da opção escolhida, nossa equipe está comprometida a um atendimento de excelência e a ajudar você no que for necessário.
            Obrigado, ficamos emocionados com cada vez que alguém demonstra um interesse genuíno em contribuir conosco, independentemente da forma que lhe seja possível. Para voltar ao início da página e explorar nosso menu ou preencher o formulário de contato, basta clicar no nome da <a href="#topo">União Alexandrense</a>. Para voltar à página inicial, clique <a href="/#">aqui</a>. Estamos à disposição para ajudar e ansiosos para atendê-lo!</p>
        </div>
      </section>
    </>
    );
  }

export default Contato;