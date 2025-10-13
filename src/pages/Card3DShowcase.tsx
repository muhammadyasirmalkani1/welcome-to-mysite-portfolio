import { Card3D } from "@/components/Card3D";
import { CardFlip } from "@/components/CardFlip";
import { CardSlide } from "@/components/CardSlide";
import { CardRotate } from "@/components/CardRotate";
import { CardGlow } from "@/components/CardGlow";
import { CardStack } from "@/components/CardStack";
import { CardContent } from "@/components/ui/card";
import { Code, Sparkles, Zap, Layers, Rocket, Star } from "lucide-react";

const Card3DShowcase = () => {
  const stackCards = [
    <CardContent className="p-8 flex flex-col items-center justify-center h-64 bg-gradient-to-br from-primary/20 to-primary/5">
      <Star className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-2xl font-bold mb-2">Card 1</h3>
      <p className="text-muted-foreground text-center">First card in the stack</p>
    </CardContent>,
    <CardContent className="p-8 flex flex-col items-center justify-center h-64 bg-gradient-to-br from-secondary/20 to-secondary/5">
      <Rocket className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-2xl font-bold mb-2">Card 2</h3>
      <p className="text-muted-foreground text-center">Second card in the stack</p>
    </CardContent>,
    <CardContent className="p-8 flex flex-col items-center justify-center h-64 bg-gradient-to-br from-accent/20 to-accent/5">
      <Sparkles className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-2xl font-bold mb-2">Card 3</h3>
      <p className="text-muted-foreground text-center">Third card in the stack</p>
    </CardContent>,
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">3D Card Animations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore interactive 3D card effects with multiple animation styles
          </p>
        </div>

        {/* 3D Tilt Card */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">3D Tilt Effect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Hover to see the card tilt in 3D space
          </p>
          <div className="max-w-md mx-auto">
            <Card3D className="glass-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">3D Tilt Card</h3>
                <p className="text-muted-foreground">
                  Move your mouse over this card to see it tilt in 3D space. The card follows your cursor with smooth animations.
                </p>
                <div className="flex justify-center gap-2">
                  <span className="glass-button px-4 py-2 text-sm">Interactive</span>
                  <span className="glass-button px-4 py-2 text-sm">Smooth</span>
                </div>
              </CardContent>
            </Card3D>
          </div>
        </section>

        {/* Flip Card */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Flip Animation</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Click to flip the card and reveal the back
          </p>
          <div className="max-w-md mx-auto h-80">
            <CardFlip
              front={
                <CardContent className="p-8 flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary/20 to-primary/5">
                  <Sparkles className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Front Side</h3>
                  <p className="text-muted-foreground text-center">Click to flip and see the magic!</p>
                </CardContent>
              }
              back={
                <CardContent className="p-8 flex flex-col items-center justify-center h-full bg-gradient-to-br from-secondary/20 to-secondary/5">
                  <Zap className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Back Side</h3>
                  <p className="text-muted-foreground text-center">You found the secret! Click again to return.</p>
                </CardContent>
              }
            />
          </div>
        </section>

        {/* Slide Cards */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Slide Animations</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Click to slide cards in different directions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["left", "right", "up", "down"].map((direction) => (
              <div key={direction} className="h-72">
                <CardSlide
                  direction={direction as any}
                  front={
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <Layers className="w-12 h-12 text-primary mb-3" />
                      <h3 className="text-xl font-bold mb-2">Slide {direction}</h3>
                      <p className="text-sm text-muted-foreground text-center">Click to slide {direction}</p>
                    </CardContent>
                  }
                  back={
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary/10 to-transparent">
                      <Rocket className="w-12 h-12 text-primary mb-3" />
                      <h3 className="text-xl font-bold mb-2">Hidden Side</h3>
                      <p className="text-sm text-muted-foreground text-center">Click to slide back</p>
                    </CardContent>
                  }
                />
              </div>
            ))}
          </div>
        </section>

        {/* Rotate Card */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Rotate Effect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Hover to rotate the card based on cursor position
          </p>
          <div className="max-w-md mx-auto">
            <CardRotate className="glass-card" speed={1.5}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Zap className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Rotating Card</h3>
                <p className="text-muted-foreground">
                  This card rotates smoothly as you move your mouse across it. The rotation follows your cursor position.
                </p>
                <div className="pt-4">
                  <span className="glass-button px-6 py-2">Hover Me!</span>
                </div>
              </CardContent>
            </CardRotate>
          </div>
        </section>

        {/* Glow Card */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Glow Effect</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Move your mouse to create a glowing spotlight effect
          </p>
          <div className="max-w-md mx-auto">
            <CardGlow className="glass-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex p-4 rounded-full bg-primary/10">
                  <Sparkles className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Glowing Card</h3>
                <p className="text-muted-foreground">
                  A spotlight glow follows your cursor as you move it across the card surface.
                </p>
                <div className="flex justify-center gap-2 pt-4">
                  <span className="glass-button px-4 py-2 text-sm">Dynamic</span>
                  <span className="glass-button px-4 py-2 text-sm">Spotlight</span>
                </div>
              </CardContent>
            </CardGlow>
          </div>
        </section>

        {/* Card Stack */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Card Stack</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Click navigation dots or cards to browse through the stack
          </p>
          <div className="max-w-md mx-auto h-80 mb-12">
            <CardStack cards={stackCards} />
          </div>
        </section>

        {/* Combined Effects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Combined Effects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Multiple animations working together
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card3D intensity={20}>
              <CardGlow className="glass-card">
                <CardContent className="p-8 text-center space-y-4">
                  <Code className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">3D + Glow</h3>
                  <p className="text-sm text-muted-foreground">
                    Combining tilt and glow effects
                  </p>
                </CardContent>
              </CardGlow>
            </Card3D>

            <CardRotate speed={2}>
              <CardGlow className="glass-card">
                <CardContent className="p-8 text-center space-y-4">
                  <Rocket className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Rotate + Glow</h3>
                  <p className="text-sm text-muted-foreground">
                    Combining rotation and glow effects
                  </p>
                </CardContent>
              </CardGlow>
            </CardRotate>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center glass-card p-12 space-y-6">
          <h3 className="text-3xl font-bold gradient-text">Ready to Use These Effects?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All these card animations are reusable components that you can integrate into any project. Mix and match to create unique experiences!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="glass-button px-6 py-3">Reusable</span>
            <span className="glass-button px-6 py-3">Customizable</span>
            <span className="glass-button px-6 py-3">Performant</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card3DShowcase;
