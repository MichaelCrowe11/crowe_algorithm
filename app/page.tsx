'use client';

import { useState } from 'react';

type AlgorithmType =
  | 'molecular-similarity'
  | 'qsar-model'
  | 'compound-screening'
  | 'structure-optimization'
  | 'pharmacophore'
  | 'virtual-screening';

interface GeneratedAlgorithm {
  name: string;
  type: AlgorithmType;
  description: string;
  parameters: Record<string, any>;
  pseudocode: string;
  complexity: string;
  useCases: string[];
}

export default function Home() {
  const [selectedType, setSelectedType] = useState<AlgorithmType>('molecular-similarity');
  const [parameters, setParameters] = useState({
    threshold: 0.7,
    method: 'tanimoto',
    maxCompounds: 100,
    iterations: 1000,
  });
  const [generatedAlgorithm, setGeneratedAlgorithm] = useState<GeneratedAlgorithm | null>(null);
  const [loading, setLoading] = useState(false);

  const algorithmTypes = [
    { id: 'molecular-similarity' as const, name: 'Molecular Similarity', icon: '🧬' },
    { id: 'qsar-model' as const, name: 'QSAR Modeling', icon: '📊' },
    { id: 'compound-screening' as const, name: 'Compound Screening', icon: '🔬' },
    { id: 'structure-optimization' as const, name: 'Structure Optimization', icon: '⚛️' },
    { id: 'pharmacophore' as const, name: 'Pharmacophore Mapping', icon: '🎯' },
    { id: 'virtual-screening' as const, name: 'Virtual Screening', icon: '🖥️' },
  ];

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: selectedType, parameters }),
      });
      const data = await response.json();
      setGeneratedAlgorithm(data);
    } catch (error) {
      console.error('Error generating algorithm:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Cheminformatics Algorithm Generator
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Design and generate optimized algorithms for compound discovery, molecular analysis, and drug development workflows.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Panel - Algorithm Selection */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Algorithm Type</h2>
              <div className="space-y-2">
                {algorithmTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                      selectedType === type.id
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Parameters */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Parameters</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Similarity Threshold
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={parameters.threshold}
                    onChange={(e) => setParameters({ ...parameters, threshold: parseFloat(e.target.value) })}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="text-right text-sm text-slate-600 mt-1">{parameters.threshold.toFixed(2)}</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Method
                  </label>
                  <select
                    value={parameters.method}
                    onChange={(e) => setParameters({ ...parameters, method: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="tanimoto">Tanimoto Coefficient</option>
                    <option value="dice">Dice Coefficient</option>
                    <option value="cosine">Cosine Similarity</option>
                    <option value="euclidean">Euclidean Distance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Max Compounds
                  </label>
                  <input
                    type="number"
                    value={parameters.maxCompounds}
                    onChange={(e) => setParameters({ ...parameters, maxCompounds: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Iterations
                  </label>
                  <input
                    type="number"
                    value={parameters.iterations}
                    onChange={(e) => setParameters({ ...parameters, iterations: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Generating...' : 'Generate Algorithm'}
              </button>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="lg:col-span-2">
            {generatedAlgorithm ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h2 className="text-3xl font-bold text-slate-800">{generatedAlgorithm.name}</h2>
                  <p className="text-slate-600 mt-2">{generatedAlgorithm.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Algorithm Type</h3>
                    <p className="text-blue-700 capitalize">{generatedAlgorithm.type.replace('-', ' ')}</p>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">Complexity</h3>
                    <p className="text-indigo-700 font-mono">{generatedAlgorithm.complexity}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-3">Parameters</h3>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <pre className="text-sm text-slate-700 overflow-x-auto">
                      {JSON.stringify(generatedAlgorithm.parameters, null, 2)}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-3">Pseudocode</h3>
                  <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                      {generatedAlgorithm.pseudocode}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-3">Use Cases</h3>
                  <ul className="space-y-2">
                    {generatedAlgorithm.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-slate-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedAlgorithm.pseudocode)}
                    className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
                  >
                    Copy Code
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-slate-200 text-center">
                <div className="text-6xl mb-4">🧪</div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">
                  Ready to Generate
                </h3>
                <p className="text-slate-600 max-w-md mx-auto">
                  Select an algorithm type, configure your parameters, and click "Generate Algorithm" to create a customized cheminformatics workflow.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* API Integration Info */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">API Integration</h2>
          <p className="mb-4">Integrate this algorithm generator into your platform:</p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 font-mono text-sm">
            <div className="mb-2">POST /api/generate</div>
            <div className="text-purple-100">
              {`{ "type": "molecular-similarity", "parameters": {...} }`}
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="/api/docs"
              className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              API Documentation
            </a>
            <a
              href="https://github.com"
              className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
