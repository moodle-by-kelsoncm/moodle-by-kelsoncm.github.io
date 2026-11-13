# Moodle by KelsonCM

Site institucional e portal hub de repositórios do ecossistema **Moodle by KelsonCM** no GitHub.

## 🌐 Internacionalização & Suporte Multilíngue
- **`/` (Root)**: Roteador inteligente com detecção automática do idioma do usuário (`navigator.language` / `localStorage`). Redireciona usuários em língua portuguesa para `/pt-br/` e aplica `/en/` como fallback (default).
- **`/en/`**: Versão completa em Inglês (default).
- **`/pt-br/`**: Versão completa em Português do Brasil.
- **Seletor no Header**: Ícones com as bandeiras dos EUA e do Brasil para alternância instantânea com persistência em `localStorage`.

---

## 🗂️ Estrutura das Macro Seções (Grandes Cards)
O portal agrupa os 17 projetos da organização em dois grandes cards envolventes com backgrounds e identidades visuais próprias:

1. **`🔌 Plugins Moodle`** (`#plugins`) — 13 repositórios
   - **Editores & Formatação**: `moodle-tiny_justify`, `moodle-tiny_fontsize`, `moodle-tiny_fontfamily`, `moodle-tiny_fileimport`, `moodle-editor_tiptap`, `moodle-tiny_toolbar`
   - **Formatos de Curso**: `moodle-format_timeline`
   - **Atividades**: `moodle-mod_imagemap`, `moodle-mod_offlinequiz` (fork)
   - **Inscrição**: `moodle-enrol_conditional`, `moodle-local_enrolconditions`
   - **Ferramentas de Administração**: `moodle-tool_participantscustomfilter`, `moodle-tool_certificate` (fork)

2. **`🛠️ Outros Repositórios`** (`#others`) — 4 repositórios
   - `docker-compose`
   - `moodle-docs-theme`
   - `moodleapp`
   - `moodle-plugin-skill`

Ficam fora do portal os repositórios arquivados (`atto_justify`, `tool_dbmigrate`), os transferidos para outras organizações (`profilefield_json`, na `moodle-fields-suite`) e os repositórios internos (`.github`, `workspace`, `moodle-by-kelsoncm.github.io`).

Acesse o portal em: [https://moodle-by-kelsoncm.github.io](https://moodle-by-kelsoncm.github.io)
