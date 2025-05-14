const natural = require("natural");
const classifier = new natural.LogisticRegressionClassifier();

//train the model with user intents
classifier.addDocument("Where is my order?", "order_status");
classifier.addDocument("How much does this cost?", "pricing_payment");
classifier.addDocument("Tell me about this product.", "product_info");
classifier.addDocument("I want a refund.", "refund_request");
classifier.addDocument("I need a refund.", "refund_request");
classifier.addDocument("I need help.", "technical_support");
classifier.addDocument("Give me my money back.", "refund_request");
classifier.addDocument("I want my money refunded.", "refund_request");
classifier.addDocument("Process my refund now.", "refund_request");
classifier.addDocument("How do I get a refund?", "refund_request");
classifier.addDocument("I need my money returned.", "refund_request");

//train the AI model
classifier.train();

//chatbot responses
const responses: Record<string, string> = {
    order_status: "Your order is being processed. You will receive an update soon!",
    pricing_payment: "This product costs $99. Let me know if you need payment options!",
    product_info: "This item is designed for comfort and durability. Here are the details...",
    refund_request: "We’ve initiated your refund. You should receive it within 5–7 business days.",
    technical_support: "I’m here to help! What issue are you facing?",
};


function getResponse(intent: string): string {
    return responses[intent] || "Sorry, I didn't quite get that. Could you rephrase?";
}

// Function to classify user input
export function classifyText(input: string): string {
    return classifier.classify(input);
}
