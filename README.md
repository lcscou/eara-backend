# Eara Backend

## WP-CLI

Para executar comandos WP-CLI sem alterar o que já existe no projeto:

1. Suba os serviços:

	docker compose up -d

2. Rode comandos WP-CLI no container dedicado:

	docker compose run --rm wpcli plugin list

3. Exemplo para limpar cache:

	docker compose run --rm wpcli cache flush

4. Se preferir, também funciona no container `wordpress` (quando o binário estiver disponível):

	docker compose exec wordpress wp --allow-root --path=/var/www/html plugin list