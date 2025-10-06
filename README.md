# Ambiente WordPress com Docker

Este projeto configura um ambiente de desenvolvimento completo para WordPress utilizando **Docker** e **Docker Compose**, incluindo:

- WordPress (com Xdebug para debug no VSCode)
- MySQL
- phpMyAdmin
- Mailhog (captura de e-mails)
- Redis
- WP-CLI
- ngrok (exposição pública)
- Makefile para facilitar os comandos

Apenas o **tema `eara`** e o **plugin `eara-blocks`** são versionados no Git.

---

## 🚀 Como iniciar o projeto

### 1. Clonar o repositório
```bash
git clone seu-repo.git
cd wordpress-docker
