import { useState } from 'react';

export default function ManeuverConsole() {
	const [thrust, setThrust] = useState(42);
	const [applied, setApplied] = useState(false);
	const eta = (42 - (thrust - 42) * 0.12).toFixed(1);
	const fuel = (84 - (thrust / 100) * 1.8).toFixed(1);

	return (
		<section className="maneuver-console" aria-labelledby="maneuver-title">
			<div className="maneuver-heading">
				<div>
					<div className="maneuver-eyebrow"><span /> SIMULACIÓN LOCAL</div>
					<h2 id="maneuver-title">Ajuste de maniobra</h2>
				</div>
				<span className="maneuver-badge">{applied ? 'VECTOR ACTUALIZADO' : 'SINCRONIZADO'}</span>
			</div>

			<div className="maneuver-body">
				<div className="thrust-control">
					<div className="thrust-label"><label htmlFor="thrust">Empuje del motor</label><strong>{thrust}<small>%</small></strong></div>
					<input id="thrust" type="range" min="10" max="90" step="1" value={thrust} onChange={(event) => { setThrust(Number(event.target.value)); setApplied(false); }} style={{ '--range-progress': `${((thrust - 10) / 80) * 100}%` }} />
					<div className="range-limits"><span>10% · ECONÓMICO</span><span>90% · MÁXIMO</span></div>
				</div>
				<div className="maneuver-results" aria-live="polite">
					<div><span>ETA PROYECTADA</span><strong>{eta}<small> días</small></strong></div>
					<div><span>COMBUSTIBLE RESTANTE</span><strong>{fuel}<small>%</small></strong></div>
				</div>
				<button className="apply-maneuver" type="button" onClick={() => setApplied(true)}>
					<span>{applied ? '✓' : '↗'}</span>{applied ? 'Vector aplicado' : 'Aplicar vector'}
				</button>
			</div>
		</section>
	);
}
