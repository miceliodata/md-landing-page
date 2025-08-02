export function getTextColorClass(color: string): string {
    return {
        sky: 'text-sky-700',
        blue: 'text-blue-500',
        indigo: 'text-indigo-500',
        cyan: 'text-cyan-600',
        emerald: 'text-emerald-700',
        slate: 'text-slate-500',
        teal: 'text-teal-500',
        gray: 'text-gray-500'
    }[color] ?? 'text-black'
}

export function getBGColorClass(color: string): string {
    return {
        sky: 'bg-sky-500',
        blue: 'bg-blue-500',
        indigo: 'bg-indigo-500',
        cyan: 'bg-cyan-500',
        emerald: 'bg-emerald-500',
        slate: 'bg-slate-500',
        teal: 'bg-teal-500',
        gray: 'bg-gray-500'
    }[color] ?? 'bg-black'
}