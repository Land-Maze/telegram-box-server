FROM node:alpine AS base
WORKDIR /app
COPY . /app
EXPOSE 3000

FROM base AS production
ENV NODE_ENV=production
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install
ENV PNPM_HOME=/usr/local/pnpm-global
ENV PATH=$PNPM_HOME:$PATH

RUN pnpm add -g @nestjs/cli

RUN pnpm run build

CMD ["pnpm", "run", "start:prod"]

FROM base AS development
ENV NODE_ENV=development
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install 

CMD ["pnpm", "run", "start:dev"]

FROM development AS test

CMD ["pnpm", "run", "test:watch"]

FROM development AS test-e2e

CMD ["pnpm", "run", "test:e2e:watch"]