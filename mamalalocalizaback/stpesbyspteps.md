# Iniciando aplicação 
    yarn init -y

# Instalando o express
    yarn add express

# Instalando as dependencias
    yarn add -D @types/express typescript ts-node-dev

# Criar as configurções do Typescript
    yarn tsc --init

# Instalando o Prisma
    yarn add prisma -D

# Configurando o banco
    yarn prisma init

# Criando as migrations
    yarn prisma migrate dev --name init

# Outras importações necessarias
    $yarn add dotenv

    yarn add axios

    yarn add @types/axios -D

    yarn add jsonwebtoken

    yarn add @types/jsonwebtoken -D

# Para abrir o banco no navegador
    yarn prisma migrate dev

    yarn prisma studio

# Instalanco socket.io para ouvir o servidor
    yarn add socket.io

    yarn add @types/socket.io -D

    yarn add cors

    yarn add @types/cors -D

# Tratamento de arquivos no Node
    yarn add multer
    yarn add @types/multer -D

# Fontes de Estudo

https://www.youtube.com/watch?v=E37-33M6Ypk
https://prensa.li/prensa/como-criar-um-sistema-crud-com-o-prisma/