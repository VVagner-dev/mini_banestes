-- CreateTable
CREATE TABLE "contas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "contas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pix_keys" (
    "id" TEXT NOT NULL,
    "pix_key" TEXT NOT NULL,
    "contaId" TEXT NOT NULL,

    CONSTRAINT "pix_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contas_cpf_key" ON "contas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "pix_keys_pix_key_key" ON "pix_keys"("pix_key");

-- AddForeignKey
ALTER TABLE "pix_keys" ADD CONSTRAINT "pix_keys_contaId_fkey" FOREIGN KEY ("contaId") REFERENCES "contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
