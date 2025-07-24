import { OrderConfirmationPage } from "@/components/client/OrderConfirmationPage";
import { Header } from "@/components/Header";

type Props = {
    params: { orderId: string };
};

export default function OrderPage({ params }: Props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex items-center justify-center flex-1 p-4">
                <OrderConfirmationPage orderId={params.orderId} />
            </main>
        </div>
    );
}
