import React from "react";
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function PartnerCard({ sponsor }) {
    return (
        <Card>
            <CardHeader>
                <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="border object-cover rounded-md p-2 w-48 bg-white"
                />
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                <div className="space-y-2 text-left">
                    <h4 className="text-xl font-bold">{sponsor.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {sponsor.description.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}
                    </p>
                    <div className="gap-2 flex pt-4">
                    {sponsor.buttons ? 
                        sponsor.buttons.map(({ text, link }) => (
                            <Button href={link} variant="secondary" size="sm">{text}</Button>
                        ))
                    : 
                        (<Button href={sponsor.website} variant="secondary" size="sm">Learn more</Button>)}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}