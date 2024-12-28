import { Separator } from '@/components/ui/separator';

type HeadingProps = {
  title: string;
  subtitle?: string;
};

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <>
      <header className="px-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {!!subtitle && (
          <h2 className="text-muted-foreground text-sm">{subtitle}</h2>
        )}
      </header>

      <Separator />
    </>
  );
}
