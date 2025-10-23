import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";
import React from "react";

const TestimonialCard = ({testimonio}: any) => {
  return (
    <Card className="relative w-full border-none gap-0 mt-0 lg:h-full">
      <Quote className="absolute top-3 right-2 h-16 w-16 text-foreground/10 stroke-[1.5px]" />
      <CardHeader className="py-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] leading-none font-semibold">
              {testimonio.nombre}
            </span>
            <span className="text-sm leading-none text-muted-foreground">
              {testimonio.cargo}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[15px] text-muted-foreground italic" >
         {testimonio.comentario}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
