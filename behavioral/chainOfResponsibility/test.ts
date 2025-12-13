import { LoginHandler } from "./LoginHandler";
import { VerifyFraudHandler } from "./VerifyFraudHandler";
import VerifyStockHandle from "./VerifyStockHandler"; // Usando o default export

type OrderRequest = {
    username: string;
    amount: number;
    item: string;
};

const login = new LoginHandler();
const fraud = new VerifyFraudHandler();
const stock = new VerifyStockHandle();

login.setNext(fraud).setNext(stock); 

const runTest = (name: string, request: OrderRequest) => {
    console.log(`\nCenário ${name}: ${JSON.stringify(request)}`);
    try {
        const result = login.handle(request);
        console.log("✅ Order processed successfully! Result: ", result);
    } catch (e: any) {
        console.error(`❌ Process stopped: ${e.message}`);
    }
};


runTest("A - Sucesso Total", { username: 'user1', amount: 100, item: "object1" });

runTest("B - Falha no Login", { username: 'user3', amount: 100, item: "object1" });

runTest("C - Falha na Fraude", { username: 'user1', amount: 60000, item: "object1" });

runTest("D - Falha no Stock", { username: 'user1', amount: 100, item: "object5" });