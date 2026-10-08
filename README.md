# Moodle by KelsonCM

Site institucional e portal hub de repositórios do ecossistema **Moodle by KelsonCM** no GitHub.

## 🌐 Internacionalização & Suporte Multilíngue
- **`/` (Root)**: Roteador inteligente com detecção automática do idioma do usuário (`navigator.language` / `localStorage`). Redireciona usuários em língua portuguesa para `/pt-br/` e aplica `/en/` como fallback (default).
- **`/en/`**: Versão completa em Inglês (default).
- **`/pt-br/`**: Versão completa em Português do Brasil.
- **Seletor no Header**: Ícones com as bandeiras dos EUA e do Brasil para alternância instantânea com persistência em `localStorage`.

---

## 🗂️ Estrutura das Macro Seções (Grandes Cards)
O portal agrupa os 19 projetos da organização em dois grandes cards envolventes com backgrounds e identidades visuais próprias:

1. **`🔌 Plugins Moodle`** (`#plugins`) — 16 repositórios
   - **Editores & Formatação**: `moodle-atto_justify`, `moodle-tiny_justify`, `moodle-tiny_fontsize`, `moodle-tiny_fontfamily`, `moodle-tiny_fileimport`, `moodle-editor_tiptap`, `moodle-local_tinytoolbar`
   - **Formatos de Curso**: `moodle-format_timeline`
   - **Atividades**: `moodle-mod_imagemap`
   - **Blocos**: `moodle-block_recommendation`
   - **Ferramentas de Administração & Utilitários CLI**: `moodle-tool_brcli`, `moodle-tool_bulkclienrolment`, `moodle-tool_dbmigrate`, `moodle-tool_participantscustomfilter`, `moodle-tool_ribbons`
   - **Campos de Perfil de Usuário**: `moodle-profilefield_json`

2. **`🛠️ Outros Repositórios`** (`#others`) — 3 repositórios
   - `docker-compose`
   - `moodle-docs-theme`
   - `moodleapp`

Acesse o portal em: [https://moodle-by-kelsoncm.github.io](https://moodle-by-kelsoncm.github.io)
