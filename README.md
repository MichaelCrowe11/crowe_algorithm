# 🧬 Cheminformatics Algorithm Generator

A modern web application for generating and configuring optimized algorithms for compound discovery, molecular analysis, and drug development workflows.

![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## ✨ Features

- **6 Algorithm Types**: Molecular Similarity, QSAR Modeling, Compound Screening, Structure Optimization, Pharmacophore Mapping, and Virtual Screening
- **Interactive UI**: Beautiful, responsive interface with real-time parameter configuration
- **REST API**: Full-featured API for platform integration
- **Comprehensive Documentation**: Built-in API documentation with examples
- **Production Ready**: Optimized for deployment on Vercel or Fly.io

## 🚀 Algorithm Types

### 1. Molecular Similarity
Fingerprint-based compound comparison using Tanimoto, Dice, Cosine, or Euclidean methods.

### 2. QSAR Modeling
Quantitative Structure-Activity Relationship modeling with Random Forest and molecular descriptors.

### 3. Compound Screening
Multi-stage virtual screening pipeline combining ligand-based and structure-based methods.

### 4. Structure Optimization
Genetic algorithm-based molecular structure optimization for drug-like properties.

### 5. Pharmacophore Mapping
3D pharmacophore model generation for identifying essential molecular features.

### 6. Virtual Screening
AI-powered screening using ensemble methods (CNN, GraphNN, QSAR).

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel / Fly.io

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/MichaelCrowe11/crowe_algorithm.git
cd crowe_algorithm

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔌 API Usage

### Generate Algorithm

```bash
POST /api/generate
Content-Type: application/json

{
  "type": "molecular-similarity",
  "parameters": {
    "threshold": 0.75,
    "method": "tanimoto",
    "maxCompounds": 100
  }
}
```

### Response

```json
{
  "name": "Molecular Similarity Search Algorithm",
  "type": "molecular-similarity",
  "description": "Fast molecular similarity search...",
  "parameters": { ... },
  "pseudocode": "function molecularSimilaritySearch...",
  "complexity": "O(n) where n is database size",
  "useCases": [ ... ]
}
```

## 📖 API Documentation

Full API documentation available at `/api/docs`

### Endpoints

- `POST /api/generate` - Generate algorithm
- `GET /api/generate` - Get API info
- `GET /api/docs` - API documentation

## 💻 Integration Examples

### JavaScript/TypeScript

```typescript
const response = await fetch('https://your-domain.vercel.app/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'qsar-model',
    parameters: { iterations: 1000 }
  })
});

const algorithm = await response.json();
```

### Python

```python
import requests

response = requests.post(
    'https://your-domain.vercel.app/api/generate',
    json={
        'type': 'compound-screening',
        'parameters': {'threshold': 0.8}
    }
)

algorithm = response.json()
```

### cURL

```bash
curl -X POST https://your-domain.vercel.app/api/generate \
  -H "Content-Type: application/json" \
  -d '{"type": "molecular-similarity", "parameters": {"threshold": 0.75}}'
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard:
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy!

### Fly.io

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Launch app
fly launch

# Deploy
fly deploy
```

## 🎨 UI Features

- Gradient backgrounds and smooth transitions
- Responsive design (mobile, tablet, desktop)
- Interactive parameter controls
- Real-time algorithm generation
- Code copy functionality
- Beautiful result visualization

## 📁 Project Structure

```
crowe_algorithm/
├── app/
│   ├── api/
│   │   ├── generate/
│   │   │   └── route.ts      # Algorithm generation endpoint
│   │   └── docs/
│   │       └── route.ts      # API documentation
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main UI component
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🔬 Use Cases

- Drug discovery and development
- Lead compound identification
- Virtual screening campaigns
- QSAR model development
- Molecular optimization
- Pharmacophore mapping
- Compound library analysis
- Chemical space exploration

## 🎯 Future Enhancements

- [ ] User authentication and API keys
- [ ] Rate limiting
- [ ] Database integration for saving algorithms
- [ ] Export algorithms as Python/R/Julia code
- [ ] Integration with RDKit and other cheminformatics libraries
- [ ] Real-time collaboration features
- [ ] Algorithm performance benchmarking

## 📧 Contact

Michael Crowe - michael@southwestmushrooms.online

Project Link: [https://github.com/MichaelCrowe11/crowe_algorithm](https://github.com/MichaelCrowe11/crowe_algorithm)

---

Built with ❤️ for the cheminformatics community
