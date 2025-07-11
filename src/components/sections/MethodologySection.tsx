const steps = [
    {
        step: "01",
        title: "Discover & Define",
        description: "I start by understanding the core problem, defining project goals, and mapping out the technical requirements for both the system architecture and the AI model."
    },
    {
        step: "02",
        title: "Design & Develop",
        description: "This phase involves iterative development—building APIs, designing the user interface, and training the initial models. I focus on clean, modular code and continuous testing."
    },
    {
        step: "03",
        title: "Deploy & Refine",
        description: "Once the core product is stable, I deploy it using containerization and CI/CD pipelines. I then monitor performance, gather feedback, and refine the models and features."
    }
]

export default function MethodologySection() {
    return (
        <section id="methodology" className="py-24 md:py-40">
            <div className="max-w-5xl mx-auto">
                <p className="section-title mb-12 text-center">03 // My Process</p>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    {steps.map((item) => (
                        <div key={item.step}>
                            <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 border-2 border-foreground rounded-full font-headline font-bold text-xl">
                                {item.step}
                            </div>
                            <h4 className="font-bold font-headline mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
