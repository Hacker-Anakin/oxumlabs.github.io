declare module "tailwindcss/lib/util/flattenColorPalette" {
    const flattenColorPalette: (colors: Record<string, string | undefined>) => Record<string, string>;
    export default flattenColorPalette;
}
  