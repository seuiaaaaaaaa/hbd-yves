import GlassJar from "./GlassJar";

interface Props {
  reveal: () => void;
}

export default function Jar({ reveal }: Props) {
  return <GlassJar onClick={reveal} />;
}
