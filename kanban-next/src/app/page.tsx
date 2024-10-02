function KanbanItem({ isEditable }: { isEditable?: boolean }) {
	return (
		<div className="w-full p-5 bg-slate-100 rounded-md flex justify-between items-center gap-5">
			{isEditable ? (
				<input
					type="text"
					className="w-24 flex-1 bg-slate-600 text-white p-2.5 rounded-md"
				/>
			) : (
				<div className="font-bold text-black flex-1">Kanban Item Title</div>
			)}
			<button type="button">
				{isEditable ? (
					<img src="/check.svg" alt="plus" />
				) : (
					<img src="/pencil.svg" alt="plus" />
				)}
			</button>
			<button type="button">
				<img src="/minus.svg" alt="minus" />
			</button>
		</div>
	);
}

function KanbanCategory({ type }: { type: string}) {
	return (
		<div className="w-[400px] bg-slate-400 rounded-xl p-5 flex flex-col gap-5">
			<div className="font-bold text-lg">{type}</div>
			<div className="flex flex-col gap-5 p-5 bg-slate-600 flex-1 rounded-lg">
				<KanbanItem />
				<KanbanItem isEditable={true} />
				<button
					type="button"
					className="w-full p-5 bg-slate-400 rounded-md flex justify-center"
				>
					<img src="/plus.svg" alt="minus" />
				</button>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="w-screen h-screen p-10 flex gap-10 text-white">
			<KanbanCategory type={"Backlog"} />
			<KanbanCategory type={"In Progress"} />
			<KanbanCategory type={"Finished"} />
		</div>
	);
}
