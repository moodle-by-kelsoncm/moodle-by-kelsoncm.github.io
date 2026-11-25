# Moodle by KelsonCM

Site institucional e portal hub de repositórios do ecossistema **Moodle by KelsonCM** no GitHub.

## 🌐 Internacionalização & Suporte Multilíngue
- **`/` (Root)**: Roteador inteligente com detecção automática do idioma do usuário (`navigator.language` / `localStorage`). Redireciona usuários em língua portuguesa para `/pt-br/` e aplica `/en/` como fallback (default).
- **`/en/`**: Versão completa em Inglês (default).
- **`/pt-br/`**: Versão completa em Português do Brasil.
- **Seletor no Header**: Ícones com as bandeiras dos EUA e do Brasil para alternância instantânea com persistência em `localStorage`.

---

## 🗂️ Estrutura das Macro Seções (Grandes Cards)
O portal agrupa os 14 projetos da organização em dois grandes cards envolventes com backgrounds e identidades visuais próprias:

1. **`🔌 Plugins Moodle`** (`#plugins`) — 10 repositórios
   - **Editores & Formatação**: `moodle-tiny_justify`, `moodle-editor_tiptap`, `moodle-tiptap_office`, `moodle-tiny_toolbar`, `moodle-atto_justify` (arquivado)
   - **Atividades**: `moodle-mod_imagemap`
   - **Inscrição**: `moodle-enrol_conditional`, `moodle-local_enrolconditions`
   - **Mensagens**: `moodle-message_telegrambot`
   - **Ferramentas de Administração**: `moodle-tool_participantscustomfilter`

2. **`🛠️ Outros Repositórios`** (`#others`) — 4 repositórios
   - `docker-compose`
   - `moodle-docs-theme`
   - `moodle-app` (fork)
   - `moodle-plugin-skill`

## 🖼️ Cards

- **Título**: nome do repositório sem o prefixo `moodle-` (redundante no portal). A busca (`data-search`) e os links usam o nome completo.
- **Ícone**: `img/icons/<nome>.png|svg`, o ícone próprio de cada projeto (o do Marketplace quando existe; os demais são SVG no mesmo estilo: quadrado arredondado colorido com símbolo branco).
- **Miniatura** (só plugins): captura real em `img/shots/<nome>.png` (800x360, sem dados pessoais) quando a documentação do plugin tem uma; ilustração SVG inline nos demais.
- **Favicon**: ícone da organização (`logo.png`), em `favicon.ico`, `img/favicon-64.png` e `apple-touch-icon.png`, referenciado em todas as páginas.

Ficam fora do portal o repositório arquivado `tool_dbmigrate`, os transferidos para outras organizações (`profilefield_json`, na `moodle-fields-suite`; os forks `moodle-tiny_fileimport`, `moodle-tiny_fontsize`, `moodle-tiny_fontfamily`, `moodle-wordfind`, `moodle-tool_certificate`, `moodle-mod_offlinequiz` e `moodle-mod_certificatebeautiful`, na `forks-by-kelsoncm`) e os repositórios internos (`.github`, `workspace`, `moodle-by-kelsoncm.github.io`).

## ↪️ Redirecionamentos

Os repositórios de plugins seguem o padrão `moodle-{plugintype}_{pluginname}` pedido pelo Moodle Marketplace; os onze que tinham só o nome do componente foram renomeados (por exemplo `tiny_justify` → `moodle-tiny_justify`). O GitHub Pages não redireciona o endereço antigo da documentação, então este site publica:

- `/<antigo>/`, `/<antigo>/en/` e `/<antigo>/pt-br/`: páginas que redirecionam para `/moodle-<antigo>/` no mesmo idioma;
- `404.html`: leva qualquer outra página antiga (`/<antigo>/...`) para o mesmo caminho em `/moodle-<antigo>/...`.
- forks transferidos para a `forks-by-kelsoncm` (`tiny_fileimport`, `tiny_fontsize`, `tiny_fontfamily`): `/<antigo>/`, `/moodle-<antigo>/` e qualquer página abaixo deles vão para `https://forks-by-kelsoncm.github.io/moodle-<antigo>/...`.

Acesse o portal em: [https://moodle-by-kelsoncm.github.io](https://moodle-by-kelsoncm.github.io)
