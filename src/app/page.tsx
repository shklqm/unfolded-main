export default function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
				<div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
				<div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
			</div>

			<div className="text-center relative z-10">
				<div className="mb-8">
					<div className="w-24 h-24 mx-auto mb-6 border-2 border-gray-600 rounded-full flex items-center justify-center animate-pulse">
						<div className="w-16 h-16 border-2 border-gray-500 rounded-full flex items-center justify-center">
							<div className="w-8 h-8 border-2 border-gray-400 rounded-full"></div>
						</div>
					</div>
				</div>

				<h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300 mb-6 tracking-wider">
					COMING SOON
				</h1>

				<div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6"></div>

				<p className="text-xl text-gray-400 mb-8 font-light tracking-wide">
					Something mysterious is brewing...
				</p>

				<div className="flex justify-center space-x-4 text-sm text-gray-500">
					<span className="animate-pulse">•</span>
					<span className="animate-pulse delay-100">•</span>
					<span className="animate-pulse delay-200">•</span>
				</div>
			</div>
		</div>
	);
}
