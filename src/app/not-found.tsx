import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center items-center justify-center min-h-screen">
            <h1 className="text-center font-bold text-5xl">
                Pagina 404 não encontrada
            </h1>
            <p>Essa página não existe</p>
            <Link href="/">
                Voltar para home
            </Link>
        </div>
    )
}