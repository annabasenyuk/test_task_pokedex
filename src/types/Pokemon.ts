export interface Pokemon {
  id: number,
  name: string,
  types: { type: { name: string } }[],
  sprites: { front_default: string }
  stats: { base_stat: number, effort: number, stat: { name: string } }[],
  weight: number,
  moves: number[],
}
