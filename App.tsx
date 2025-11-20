import React, { useState, useEffect, useCallback } from 'react';
import { SlideLayout } from './components/SlideLayout';
import { ComparisonChart, LossCurve, ClassPerformanceChart } from './components/Charts';
import { 
  Brain, 
  Mic, 
  BarChart3, 
  Network, 
  Database, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  User,
  MapPin,
  ChevronRight,
  History,
  Sliders,
  Grid,
  Cpu,
  Zap
} from 'lucide-react';

const KeyIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3v-3l3 3"/></svg>
);

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      title: "Title Slide",
      isTitle: true,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background Shape */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

            <div className="z-10 max-w-4xl px-6">
                <div className="mb-6 inline-block px-4 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide">
                    MASTER'S THESIS PRESENTATION
                </div>
                <h1 className="text-5xl font-bold leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                    Hybrid CNN–Transformer Architecture for Arabic Speech Emotion Recognition
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left border-t border-white/10 pt-8">
                    <div>
                        <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">Presented By</p>
                        <p className="font-medium">Youcef Soufiane Gheffari</p>
                        <p className="font-medium">Oussama M. Benouddane</p>
                    </div>
                    <div>
                        <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">Supervised By</p>
                        <p className="font-medium">Dr. Samiya Silarbi</p>
                    </div>
                    <div>
                        <p className="text-blue-400 text-xs uppercase tracking-widest mb-2">Affiliation</p>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>USTO-MB, Oran, Algeria</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    },
    // Slide 2: Introduction
    {
      title: "Introduction & Problem Statement",
      content: (
        <div className="grid grid-cols-2 gap-12 h-full items-center">
            <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">The Context</h3>
                    <p className="text-slate-700">Speech Emotion Recognition (SER) is crucial for Human-Computer Interaction (HCI), applicable in call centers, healthcare, and driver monitoring.</p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-900 mb-2">The Problem</h3>
                    <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5"/> <span>Scarcity of Arabic annotated datasets compared to English/German.</span></li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5"/> <span>Complex dialectal diversity (Maghrebi, Egyptian, Levantine).</span></li>
                        <li className="flex items-start gap-2"><AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5"/> <span>Limitations of traditional models (CNN-only or RNN) in capturing global dependencies.</span></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center opacity-90">
                <div className="relative w-64 h-64 bg-slate-100 rounded-full flex items-center justify-center animate-pulse">
                    <Mic className="w-32 h-32 text-blue-600" />
                </div>
                <p className="mt-6 text-center text-slate-500 italic max-w-xs">"Machines still lack the ability to fully interpret emotional content in Arabic speech."</p>
            </div>
        </div>
      )
    },
    // Slide 3: Related Work
    {
      title: "Related Work & State of the Art",
      content: (
        <div className="h-full flex flex-col">
            <p className="text-slate-600 mb-6">Existing studies on Arabic SER have primarily relied on acted corpora and traditional classifiers.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2">2019</div>
                    <h4 className="font-bold text-slate-800">Al-Qatab et al.</h4>
                    <div className="my-2 text-xs bg-slate-100 inline-block px-2 py-1 rounded text-slate-600">Acted Data</div>
                    <p className="text-sm text-slate-600 mt-2 flex-1">Hybrid CNN + BLSTM with attention.</p>
                    <div className="text-xs text-red-500 mt-2 font-medium">Limit: Acted emotions</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2">2020</div>
                    <h4 className="font-bold text-slate-800">Hussein et al.</h4>
                     <div className="my-2 text-xs bg-green-100 inline-block px-2 py-1 rounded text-green-700">Natural Data</div>
                    <p className="text-sm text-slate-600 mt-2 flex-1">SMO Classifier on TV broadcasts.</p>
                    <div className="text-xs text-red-500 mt-2 font-medium">Limit: Shallow Classifier</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2">2022</div>
                    <h4 className="font-bold text-slate-800">Al-Onazi et al.</h4>
                     <div className="my-2 text-xs bg-slate-100 inline-block px-2 py-1 rounded text-slate-600">Acted Data</div>
                    <p className="text-sm text-slate-600 mt-2 flex-1">Classical SVM/KNN approaches.</p>
                     <div className="text-xs text-red-500 mt-2 font-medium">Limit: Feature Engineering</div>
                </div>

                 <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-500 shadow-md flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] px-2 py-1 rounded-bl">THIS WORK</div>
                    <div className="text-xs font-bold text-blue-400 uppercase mb-2">Proposed</div>
                    <h4 className="font-bold text-blue-900">CNN-Transformer</h4>
                     <div className="my-2 text-xs bg-blue-100 inline-block px-2 py-1 rounded text-blue-700">Semi-Natural</div>
                    <p className="text-sm text-blue-800 mt-2 flex-1">Combines spectral extraction with long-range temporal modeling.</p>
                    <div className="text-xs text-green-600 mt-2 font-bold">Target: SOTA</div>
                </div>
            </div>
        </div>
      )
    },
    // Slide 4: Proposed Architecture
    {
        title: "Proposed Solution: Hybrid Architecture",
        content: (
            <div className="h-full flex flex-col">
                <p className="mb-6 text-lg text-slate-700">A synergistic combination of Convolutional Neural Networks and Transformers.</p>
                
                <div className="flex-1 flex flex-col justify-center items-center gap-6">
                    {/* Architecture Diagram */}
                    <div className="w-full max-w-4xl flex items-center justify-between bg-slate-50 p-8 rounded-xl border border-slate-200">
                        
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-24 h-24 bg-white border-2 border-slate-300 rounded-lg flex items-center justify-center shadow-sm">
                                <div className="space-y-1">
                                    <div className="w-16 h-2 bg-slate-200 rounded"></div>
                                    <div className="w-16 h-2 bg-slate-200 rounded"></div>
                                    <div className="w-16 h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-slate-500">Mel-Spectrogram</span>
                        </div>

                        <ChevronRight className="text-slate-300" />

                        <div className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <Layers className="w-10 h-10 text-blue-600 mb-2" />
                            <span className="text-sm font-bold text-blue-900">CNN Extractor</span>
                            <span className="text-[10px] text-blue-600">Local Spectral Features</span>
                        </div>

                         <ChevronRight className="text-slate-300" />

                        <div className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-lg border border-purple-100">
                            <Cpu className="w-10 h-10 text-purple-600 mb-2" />
                            <span className="text-sm font-bold text-purple-900">Transformer</span>
                            <span className="text-[10px] text-purple-600">Global Temporal Context</span>
                        </div>

                         <ChevronRight className="text-slate-300" />

                        <div className="flex flex-col items-center gap-2">
                            <div className="w-24 h-24 bg-white border-2 border-green-400 rounded-lg flex flex-col items-center justify-center shadow-sm">
                                <div className="text-xl font-bold text-green-600">97.8%</div>
                                <div className="text-[10px] text-slate-400">Prediction</div>
                            </div>
                            <span className="text-xs font-bold text-slate-500">Softmax Output</span>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-8 w-full max-w-3xl">
                         <div className="flex gap-3 items-start">
                            <div className="p-2 bg-blue-100 rounded-lg"><Layers className="w-4 h-4 text-blue-600" /></div>
                            <p className="text-sm text-slate-600"><strong>CNN:</strong> Extracts local patterns like pitch and formants using 3 convolutional layers.</p>
                         </div>
                         <div className="flex gap-3 items-start">
                            <div className="p-2 bg-purple-100 rounded-lg"><Cpu className="w-4 h-4 text-purple-600" /></div>
                            <p className="text-sm text-slate-600"><strong>Transformer:</strong> Uses Self-Attention to remember emotion across the entire utterance, fixing RNN vanishing gradient issues.</p>
                         </div>
                    </div>
                </div>
            </div>
        )
    },
    // Slide 5: The Attention Mechanism (New)
    {
        title: "The Attention Mechanism",
        content: (
            <div className="h-full grid grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                     <h3 className="text-xl font-bold text-slate-800">Scaled Dot-Product Attention</h3>
                     <p className="text-slate-600">
                         The core of the Transformer, allowing the model to weigh the importance of different parts of the audio sequence dynamically.
                     </p>
                     
                     <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg font-mono text-center my-8">
                         <div className="text-lg mb-2 opacity-50">Attention(Q, K, V) =</div>
                         <div className="text-2xl font-bold tracking-wider text-yellow-400">
                             softmax<span className="text-white">(</span>
                             <div className="inline-block align-middle text-center mx-2">
                                 <div className="border-b border-white mb-1">QK<sup>T</sup></div>
                                 <div className="text-lg">√d<sub>k</sub></div>
                             </div>
                             <span className="text-white">)</span>V
                         </div>
                     </div>

                     <ul className="space-y-3 text-sm text-slate-700">
                         <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500"/> <strong>Query (Q):</strong> The current focus of the model.</li>
                         <li className="flex items-center gap-2"><KeyIcon className="w-4 h-4 text-blue-500"/> <strong>Key (K):</strong> Index to compare against Query.</li>
                         <li className="flex items-center gap-2"><Database className="w-4 h-4 text-green-500"/> <strong>Value (V):</strong> The actual information content.</li>
                     </ul>
                </div>

                <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 h-full flex flex-col items-center justify-center">
                     <div className="w-full max-w-xs space-y-2">
                         <div className="flex justify-between text-xs text-slate-500 font-mono">
                             <span>Input</span>
                             <span>Output</span>
                         </div>
                         <div className="h-64 relative">
                             {/* Abstract Visualization of Attention Heads */}
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-40 h-40 border-4 border-dashed border-purple-200 rounded-full animate-spin-slow"></div>
                                 <div className="absolute w-32 h-32 border-4 border-purple-300 rounded-full animate-ping opacity-20"></div>
                             </div>
                             <div className="absolute inset-0 flex flex-col justify-between py-4">
                                 <div className="flex justify-around">
                                     {[1,2,3].map(i => <div key={i} className="w-3 h-3 bg-blue-500 rounded-full"></div>)}
                                 </div>
                                 <div className="flex justify-center items-center h-full opacity-30">
                                     <Network className="w-24 h-24 text-purple-600" />
                                 </div>
                                 <div className="flex justify-around">
                                     {[1,2,3].map(i => <div key={i} className="w-3 h-3 bg-green-500 rounded-full"></div>)}
                                 </div>
                             </div>
                         </div>
                         <div className="text-center text-xs font-medium text-purple-700 bg-purple-50 py-2 rounded">
                             Multi-Head Self-Attention Layer
                         </div>
                     </div>
                </div>
            </div>
        )
    },
    // Slide 6: Feature Extraction Details
    {
        title: "Feature Extraction: Mel-Spectrograms",
        content: (
            <div className="grid grid-cols-2 gap-8 h-full">
                <div className="space-y-6">
                    <p className="text-slate-700 leading-relaxed">
                        We utilize <strong>Mel-spectrograms</strong> as the primary input, representing the audio signal in the time-frequency domain, scaled to mimic human auditory perception.
                    </p>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-3">Preprocessing Steps:</h4>
                        <ol className="list-decimal ml-4 space-y-2 text-sm text-slate-600">
                            <li><strong>Standardization:</strong> 16 kHz sampling rate.</li>
                            <li><strong>Segmentation:</strong> 25ms Hamming window, 10ms shift.</li>
                            <li><strong>STFT:</strong> Short-Time Fourier Transform to power spectrum.</li>
                            <li><strong>Mel Filter Bank:</strong> 128 filters applied.</li>
                            <li><strong>Log Scale:</strong> Reduce dynamic range.</li>
                        </ol>
                    </div>
                </div>
                <div className="bg-black rounded-lg overflow-hidden relative flex items-center justify-center">
                    {/* Simulated Spectrogram Visualization */}
                    <div className="w-full h-64 bg-gradient-to-r from-indigo-900 via-purple-800 to-orange-500 opacity-80 flex items-end justify-around px-2">
                        {Array.from({length: 40}).map((_, i) => (
                            <div key={i} 
                                 className="w-2 bg-white/20 rounded-t-sm" 
                                 style={{height: `${Math.random() * 80 + 10}%`}}>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-2 right-4 text-white text-xs bg-black/50 px-2 py-1 rounded">
                        Visual Representation (Simulated)
                    </div>
                    <div className="absolute left-4 top-4 text-white/80 text-sm font-mono">
                        Y-Axis: Frequency (Mel)<br/>
                        X-Axis: Time
                    </div>
                </div>
            </div>
        )
    },
    // Slide 7: The Dataset (EYASE)
    {
        title: "Dataset: EYASE Corpus",
        content: (
            <div className="h-full flex flex-col gap-6">
                <div className="flex items-start gap-4">
                    <Database className="w-10 h-10 text-blue-600 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold">EYASE (Egyptian Arabic Speech Emotion)</h3>
                        <p className="text-slate-600">A semi-natural dataset recorded by young Egyptian speakers.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Key Characteristics</h4>
                        <ul className="space-y-3 text-sm text-slate-700">
                            <li className="flex justify-between"><span>Language:</span> <span className="font-semibold">Egyptian Arabic</span></li>
                            <li className="flex justify-between"><span>Type:</span> <span className="font-semibold">Semi-natural</span></li>
                            <li className="flex justify-between"><span>Total Samples:</span> <span className="font-semibold">461</span></li>
                            <li className="flex justify-between"><span>Audio Quality:</span> <span className="font-semibold">Controlled Environment</span></li>
                        </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
                        <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Emotion Classes</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-center font-medium">Anger</div>
                            <div className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-lg text-center font-medium">Happiness</div>
                            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-center font-medium">Sadness</div>
                            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-center font-medium">Neutral</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    // Slide 8: Implementation Details (New)
    {
        title: "Implementation & Hyperparameters",
        content: (
             <div className="h-full flex flex-col">
                 <p className="text-slate-600 mb-8">Implemented in PyTorch on NVIDIA GPU. Optimized using Adam with Cosine Annealing.</p>
                 
                 <div className="flex-1 grid grid-cols-2 gap-8">
                     <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                         <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 font-bold text-slate-700 flex items-center gap-2">
                             <Sliders className="w-4 h-4"/> Model Configuration
                         </div>
                         <div className="p-6 space-y-4">
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Mel Filters</span>
                                 <span className="font-mono font-bold">128</span>
                             </div>
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">CNN Layers</span>
                                 <span className="font-mono font-bold">3 Conv + Pooling</span>
                             </div>
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Transformer Layers</span>
                                 <span className="font-mono font-bold">4 Encoders</span>
                             </div>
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Attention Heads</span>
                                 <span className="font-mono font-bold">8</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-slate-600">Embedding Dim</span>
                                 <span className="font-mono font-bold">256</span>
                             </div>
                         </div>
                     </div>

                     <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                         <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 font-bold text-slate-700 flex items-center gap-2">
                             <History className="w-4 h-4"/> Training Settings
                         </div>
                         <div className="p-6 space-y-4">
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Batch Size</span>
                                 <span className="font-mono font-bold">32</span>
                             </div>
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Optimizer</span>
                                 <span className="font-mono font-bold">Adam</span>
                             </div>
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Learning Rate</span>
                                 <span className="font-mono font-bold">1e-4</span>
                             </div>
                             <div className="flex justify-between border-b border-dashed pb-2">
                                 <span className="text-slate-600">Dropout Rate</span>
                                 <span className="font-mono font-bold">0.3</span>
                             </div>
                             <div className="flex justify-between">
                                 <span className="text-slate-600">Epochs</span>
                                 <span className="font-mono font-bold">100 (Early Stop)</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        )
    },
    // Slide 9: Experimental Results
    {
        title: "Experimental Results: Overview",
        content: (
            <div className="h-full flex flex-col">
                <p className="text-slate-600 mb-6">Comparison against baseline methods demonstrates significant improvement across all metrics.</p>
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                    <ComparisonChart />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-700">97.8%</div>
                        <div className="text-xs text-green-800 uppercase font-semibold">Accuracy</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-700">0.98</div>
                        <div className="text-xs text-blue-800 uppercase font-semibold">Macro F1-Score</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-700">SOTA</div>
                        <div className="text-xs text-purple-800 uppercase font-semibold">On EYASE</div>
                    </div>
                </div>
            </div>
        )
    },
    // Slide 10: Detailed Evaluation (New)
    {
        title: "Class-wise Evaluation Metrics",
        content: (
            <div className="h-full grid grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Precision, Recall & F1-Score</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        The model demonstrates exceptional balance across all emotion categories.
                        <br/><br/>
                        High recall in <strong>Sadness (0.98)</strong> and <strong>Anger (0.97)</strong> indicates the model effectively captures strong prosodic cues and low-arousal states alike.
                    </p>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                         <table className="w-full text-sm text-left">
                             <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                                 <tr>
                                     <th className="px-4 py-2 rounded-l-lg">Class</th>
                                     <th className="px-4 py-2">Precision</th>
                                     <th className="px-4 py-2">Recall</th>
                                     <th className="px-4 py-2 rounded-r-lg">F1-Score</th>
                                 </tr>
                             </thead>
                             <tbody className="font-medium text-slate-700">
                                 <tr className="border-b border-slate-100">
                                     <td className="px-4 py-3">Anger</td>
                                     <td className="px-4 py-3 text-blue-600">0.98</td>
                                     <td className="px-4 py-3">0.97</td>
                                     <td className="px-4 py-3">0.97</td>
                                 </tr>
                                 <tr className="border-b border-slate-100">
                                     <td className="px-4 py-3">Happiness</td>
                                     <td className="px-4 py-3 text-blue-600">0.97</td>
                                     <td className="px-4 py-3">0.98</td>
                                     <td className="px-4 py-3">0.97</td>
                                 </tr>
                                 <tr className="border-b border-slate-100">
                                     <td className="px-4 py-3">Sadness</td>
                                     <td className="px-4 py-3 text-blue-600">0.98</td>
                                     <td className="px-4 py-3">0.98</td>
                                     <td className="px-4 py-3">0.98</td>
                                 </tr>
                                 <tr>
                                     <td className="px-4 py-3">Neutral</td>
                                     <td className="px-4 py-3 text-blue-600">0.98</td>
                                     <td className="px-4 py-3">0.98</td>
                                     <td className="px-4 py-3">0.98</td>
                                 </tr>
                             </tbody>
                         </table>
                    </div>
                </div>
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                     <h4 className="text-center text-sm font-bold text-slate-500 mb-2">Visual Performance Breakdown</h4>
                     <ClassPerformanceChart />
                </div>
            </div>
        )
    },
    // Slide 11: Confusion Matrix (New)
    {
        title: "Confusion Matrix Analysis",
        content: (
            <div className="h-full flex items-center justify-center gap-12">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                    <div className="grid grid-cols-[auto_1fr] gap-4">
                        {/* Y-Axis Label */}
                        <div className="flex items-center justify-center">
                             <span className="-rotate-90 font-bold text-slate-400 text-sm tracking-widest">TRUE LABEL</span>
                        </div>
                        
                        <div>
                             {/* X-Axis Label */}
                             <div className="text-center font-bold text-slate-400 text-sm tracking-widest mb-4">PREDICTED LABEL</div>
                             
                             <div className="grid grid-cols-5 gap-2 text-center text-sm">
                                 {/* Headers */}
                                 <div className="font-bold text-slate-600"></div>
                                 <div className="font-bold text-slate-600">Anger</div>
                                 <div className="font-bold text-slate-600">Happy</div>
                                 <div className="font-bold text-slate-600">Neutral</div>
                                 <div className="font-bold text-slate-600">Sadness</div>

                                 {/* Row 1: Anger */}
                                 <div className="font-bold text-slate-600 flex items-center justify-end pr-2">Anger</div>
                                 <div className="bg-blue-600 text-white p-3 rounded font-bold">45</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>

                                 {/* Row 2: Happy */}
                                 <div className="font-bold text-slate-600 flex items-center justify-end pr-2">Happy</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>
                                 <div className="bg-blue-500 text-white p-3 rounded font-bold">40</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>

                                 {/* Row 3: Neutral */}
                                 <div className="font-bold text-slate-600 flex items-center justify-end pr-2">Neutral</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>
                                 <div className="bg-red-100 text-red-600 p-3 rounded font-bold">7</div>
                                 <div className="bg-blue-500 text-white p-3 rounded font-bold">38</div>
                                 <div className="bg-slate-50 text-slate-300 p-3 rounded">0</div>

                                 {/* Row 4: Sadness */}
                                 <div className="font-bold text-slate-600 flex items-center justify-end pr-2">Sadness</div>
                                 <div className="bg-red-50 text-red-300 p-3 rounded">1</div>
                                 <div className="bg-red-50 text-red-300 p-3 rounded">1</div>
                                 <div className="bg-red-50 text-red-400 p-3 rounded font-bold">2</div>
                                 <div className="bg-blue-600 text-white p-3 rounded font-bold">41</div>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-xs space-y-4">
                     <h4 className="font-bold text-slate-800 border-b pb-2">Analysis</h4>
                     <div className="text-sm text-slate-600 space-y-3">
                         <p><span className="text-green-600 font-bold">Strong Diagonal:</span> Indicates high classification accuracy across all classes.</p>
                         <p><span className="text-red-500 font-bold">Confusion Area:</span> Neutral speech was occasionally misclassified as Happy (7 instances). This suggests overlap in prosodic features in Arabic dialects.</p>
                         <p><span className="text-blue-600 font-bold">Negative Emotions:</span> Anger and Sadness show minimal confusion, likely due to distinct intensity and spectral patterns.</p>
                     </div>
                </div>
            </div>
        )
    },
     // Slide 12: Training Dynamics
     {
        title: "Training Dynamics & Convergence",
        content: (
            <div className="grid grid-cols-2 gap-8 h-full">
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col">
                    <h4 className="text-sm font-bold text-slate-500 uppercase mb-4">Loss & Accuracy Curves</h4>
                    <div className="flex-1">
                        <LossCurve />
                    </div>
                </div>
                
                <div className="space-y-6 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-slate-800">Key Findings</h3>
                    
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="mt-1"><TrendingUp className="w-5 h-5 text-blue-600" /></div>
                            <div>
                                <h5 className="font-bold text-slate-800 text-sm">Rapid Convergence</h5>
                                <p className="text-xs text-slate-600">Model achieves stability within 60-80 epochs due to effective feature learning by CNN layers.</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-green-600" /></div>
                            <div>
                                <h5 className="font-bold text-slate-800 text-sm">Generalization</h5>
                                <p className="text-xs text-slate-600">Validation loss tracks training loss closely, confirming that Dropout (0.3) successfully mitigated overfitting.</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div className="mt-1"><Grid className="w-5 h-5 text-purple-500" /></div>
                            <div>
                                <h5 className="font-bold text-slate-800 text-sm">Stability</h5>
                                <p className="text-xs text-slate-600">Batch Normalization ensured stable gradients throughout the hybrid architecture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    // Slide 13: Conclusion
    {
        title: "Conclusion & Future Work",
        content: (
            <div className="h-full flex flex-col justify-between py-4">
                <div className="bg-blue-50 rounded-xl p-8 border-l-8 border-blue-600">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Summary</h3>
                    <p className="text-slate-700 text-lg leading-relaxed">
                        The proposed <span className="font-bold">CNN–Transformer</span> hybrid sets a new benchmark for Arabic SER. 
                        By combining local spectral extraction (CNN) with global temporal modeling (Transformer), 
                        we achieved <span className="font-bold text-blue-700">97.8% accuracy</span> on the EYASE corpus.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <MapPin className="w-8 h-8 text-purple-500 mb-3" />
                        <h4 className="font-bold text-slate-800 mb-2">Dialect Expansion</h4>
                        <p className="text-sm text-slate-600">Extend research to Maghrebi, Levantine, and Gulf dialects to test cross-dialect robustness.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <Brain className="w-8 h-8 text-indigo-500 mb-3" />
                        <h4 className="font-bold text-slate-800 mb-2">Advanced Models</h4>
                        <p className="text-sm text-slate-600">Explore Conformer (Convolution-augmented Transformer) and Wav2Vec2 self-supervised learning.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <User className="w-8 h-8 text-emerald-500 mb-3" />
                        <h4 className="font-bold text-slate-800 mb-2">Multimodal SER</h4>
                        <p className="text-sm text-slate-600">Integrate facial expressions or physiological cues for higher accuracy in ambiguous scenarios.</p>
                    </div>
                </div>

                <div className="text-center text-slate-400 text-sm font-medium mt-4">
                    Thank You for Your Attention
                </div>
            </div>
        )
    }
  ];

  // Keyboard Navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    } else if (event.key === 'ArrowLeft') {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  }, [slides.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <SlideLayout
      currentSlide={currentSlide}
      totalSlides={slides.length}
      title={slides[currentSlide].title}
      isTitleSlide={slides[currentSlide].isTitle}
      onNext={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
      onPrev={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
    >
      {slides[currentSlide].content}
    </SlideLayout>
  );
};

export default App;