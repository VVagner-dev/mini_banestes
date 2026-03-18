-- CreateTable
CREATE TABLE "transacoes" (
    "id" TEXT NOT NULL,
    "pagador_id" TEXT NOT NULL,
    "remetente_id" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "data_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "transacoes_pagador_id_fkey" FOREIGN KEY ("pagador_id") REFERENCES "contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transacoes" ADD CONSTRAINT "transacoes_remetente_id_fkey" FOREIGN KEY ("remetente_id") REFERENCES "contas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
