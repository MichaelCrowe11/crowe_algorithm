import { NextResponse } from 'next/server';

const apiDocumentation = {
  openapi: '3.0.0',
  info: {
    title: 'Cheminformatics Algorithm Generator API',
    version: '1.0.0',
    description: 'REST API for generating and configuring cheminformatics algorithms for compound discovery and drug development.',
    contact: {
      name: 'Crowe Algorithm',
      email: 'michael@southwestmushrooms.online',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'https://your-domain.vercel.app',
      description: 'Production server',
    },
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    '/api/generate': {
      post: {
        summary: 'Generate a cheminformatics algorithm',
        description: 'Create a customized algorithm based on the specified type and parameters',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['type'],
                properties: {
                  type: {
                    type: 'string',
                    enum: [
                      'molecular-similarity',
                      'qsar-model',
                      'compound-screening',
                      'structure-optimization',
                      'pharmacophore',
                      'virtual-screening',
                    ],
                    description: 'The type of algorithm to generate',
                  },
                  parameters: {
                    type: 'object',
                    properties: {
                      threshold: {
                        type: 'number',
                        minimum: 0,
                        maximum: 1,
                        default: 0.7,
                        description: 'Similarity or confidence threshold',
                      },
                      method: {
                        type: 'string',
                        enum: ['tanimoto', 'dice', 'cosine', 'euclidean'],
                        default: 'tanimoto',
                        description: 'Similarity calculation method',
                      },
                      maxCompounds: {
                        type: 'integer',
                        minimum: 1,
                        maximum: 10000,
                        default: 100,
                        description: 'Maximum number of compounds to process or return',
                      },
                      iterations: {
                        type: 'integer',
                        minimum: 100,
                        maximum: 100000,
                        default: 1000,
                        description: 'Number of iterations for optimization algorithms',
                      },
                    },
                  },
                },
                example: {
                  type: 'molecular-similarity',
                  parameters: {
                    threshold: 0.75,
                    method: 'tanimoto',
                    maxCompounds: 100,
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successfully generated algorithm',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Algorithm name',
                    },
                    type: {
                      type: 'string',
                      description: 'Algorithm type',
                    },
                    description: {
                      type: 'string',
                      description: 'Detailed description of the algorithm',
                    },
                    parameters: {
                      type: 'object',
                      description: 'Configured parameters',
                    },
                    pseudocode: {
                      type: 'string',
                      description: 'Algorithm implementation in pseudocode',
                    },
                    complexity: {
                      type: 'string',
                      description: 'Time complexity analysis',
                    },
                    useCases: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                      description: 'Real-world use cases and applications',
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Invalid request parameters',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Invalid algorithm type',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
          },
        },
      },
      get: {
        summary: 'Get API information',
        description: 'Returns basic API information and available algorithm types',
        responses: {
          '200': {
            description: 'API information',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                    },
                    version: {
                      type: 'string',
                    },
                    availableAlgorithms: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                    usage: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      AlgorithmType: {
        type: 'string',
        enum: [
          'molecular-similarity',
          'qsar-model',
          'compound-screening',
          'structure-optimization',
          'pharmacophore',
          'virtual-screening',
        ],
      },
    },
  },
};

const htmlDocumentation = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cheminformatics Algorithm Generator - API Documentation</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 16px;
            padding: 3rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #667eea;
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        h2 {
            color: #764ba2;
            font-size: 1.8rem;
            margin: 2rem 0 1rem;
            border-bottom: 2px solid #667eea;
            padding-bottom: 0.5rem;
        }
        h3 {
            color: #667eea;
            font-size: 1.3rem;
            margin: 1.5rem 0 0.5rem;
        }
        .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: bold;
            margin-right: 0.5rem;
        }
        .badge-post { background: #10b981; color: white; }
        .badge-get { background: #3b82f6; color: white; }
        .endpoint {
            background: #f8fafc;
            border-left: 4px solid #667eea;
            padding: 1.5rem;
            margin: 1rem 0;
            border-radius: 8px;
        }
        .code-block {
            background: #1e293b;
            color: #10b981;
            padding: 1.5rem;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            margin: 1rem 0;
        }
        .param-table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        .param-table th,
        .param-table td {
            text-align: left;
            padding: 0.75rem;
            border-bottom: 1px solid #e2e8f0;
        }
        .param-table th {
            background: #f1f5f9;
            font-weight: 600;
            color: #475569;
        }
        .algorithm-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        .algorithm-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1.5rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .algorithm-card h4 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
        }
        .integration-example {
            background: #eff6ff;
            border: 2px solid #3b82f6;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧬 Cheminformatics Algorithm Generator API</h1>
        <p style="font-size: 1.1rem; color: #64748b; margin-bottom: 2rem;">
            Generate optimized algorithms for compound discovery, molecular analysis, and drug development workflows.
        </p>

        <h2>📚 Available Algorithms</h2>
        <div class="algorithm-grid">
            <div class="algorithm-card">
                <h4>Molecular Similarity</h4>
                <p style="font-size: 0.9rem; opacity: 0.9;">Fingerprint-based compound comparison</p>
            </div>
            <div class="algorithm-card">
                <h4>QSAR Modeling</h4>
                <p style="font-size: 0.9rem; opacity: 0.9;">Activity prediction from structure</p>
            </div>
            <div class="algorithm-card">
                <h4>Compound Screening</h4>
                <p style="font-size: 0.9rem; opacity: 0.9;">Multi-stage virtual screening</p>
            </div>
            <div class="algorithm-card">
                <h4>Structure Optimization</h4>
                <p style="font-size: 0.9rem; opacity: 0.9;">Genetic algorithm optimization</p>
            </div>
            <div class="algorithm-card">
                <h4>Pharmacophore Mapping</h4>
                <p style="font-size: 0.9rem; opacity: 0.9;">3D feature identification</p>
            </div>
            <div class="algorithm-card">
                <h4>Virtual Screening</h4>
                <p style="font-size: 0.9rem; opacity: 0.9;">AI-powered drug discovery</p>
            </div>
        </div>

        <h2>🔌 API Endpoints</h2>

        <div class="endpoint">
            <h3>
                <span class="badge badge-post">POST</span>
                /api/generate
            </h3>
            <p>Generate a customized cheminformatics algorithm</p>

            <h4 style="margin-top: 1rem; color: #475569;">Request Body:</h4>
            <table class="param-table">
                <thead>
                    <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>type</code></td>
                        <td>string</td>
                        <td>✓</td>
                        <td>Algorithm type</td>
                    </tr>
                    <tr>
                        <td><code>parameters.threshold</code></td>
                        <td>number</td>
                        <td></td>
                        <td>Similarity threshold (0-1)</td>
                    </tr>
                    <tr>
                        <td><code>parameters.method</code></td>
                        <td>string</td>
                        <td></td>
                        <td>Calculation method</td>
                    </tr>
                    <tr>
                        <td><code>parameters.maxCompounds</code></td>
                        <td>integer</td>
                        <td></td>
                        <td>Max compounds to process</td>
                    </tr>
                    <tr>
                        <td><code>parameters.iterations</code></td>
                        <td>integer</td>
                        <td></td>
                        <td>Optimization iterations</td>
                    </tr>
                </tbody>
            </table>

            <h4 style="margin-top: 1rem; color: #475569;">Example Request:</h4>
            <div class="code-block">
curl -X POST https://your-domain.vercel.app/api/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "molecular-similarity",
    "parameters": {
      "threshold": 0.75,
      "method": "tanimoto",
      "maxCompounds": 100
    }
  }'
            </div>

            <h4 style="margin-top: 1rem; color: #475569;">Example Response:</h4>
            <div class="code-block">
{
  "name": "Molecular Similarity Search Algorithm",
  "type": "molecular-similarity",
  "description": "Fast molecular similarity search...",
  "parameters": { ... },
  "pseudocode": "function molecularSimilaritySearch...",
  "complexity": "O(n) where n is database size",
  "useCases": [ ... ]
}
            </div>
        </div>

        <div class="endpoint">
            <h3>
                <span class="badge badge-get">GET</span>
                /api/generate
            </h3>
            <p>Get API information and available algorithm types</p>
        </div>

        <h2>💻 Integration Examples</h2>

        <div class="integration-example">
            <h3>JavaScript/TypeScript</h3>
            <div class="code-block">
const response = await fetch('https://your-domain.vercel.app/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'qsar-model',
    parameters: {
      iterations: 1000,
      maxCompounds: 200
    }
  })
});

const algorithm = await response.json();
console.log(algorithm.pseudocode);
            </div>
        </div>

        <div class="integration-example">
            <h3>Python</h3>
            <div class="code-block">
import requests

response = requests.post(
    'https://your-domain.vercel.app/api/generate',
    json={
        'type': 'compound-screening',
        'parameters': {
            'threshold': 0.8,
            'maxCompounds': 500
        }
    }
)

algorithm = response.json()
print(algorithm['pseudocode'])
            </div>
        </div>

        <h2>📖 Response Schema</h2>
        <table class="param-table">
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>name</code></td>
                    <td>string</td>
                    <td>Algorithm name</td>
                </tr>
                <tr>
                    <td><code>type</code></td>
                    <td>string</td>
                    <td>Algorithm type identifier</td>
                </tr>
                <tr>
                    <td><code>description</code></td>
                    <td>string</td>
                    <td>Detailed algorithm description</td>
                </tr>
                <tr>
                    <td><code>parameters</code></td>
                    <td>object</td>
                    <td>Configured parameters</td>
                </tr>
                <tr>
                    <td><code>pseudocode</code></td>
                    <td>string</td>
                    <td>Implementation pseudocode</td>
                </tr>
                <tr>
                    <td><code>complexity</code></td>
                    <td>string</td>
                    <td>Time complexity analysis</td>
                </tr>
                <tr>
                    <td><code>useCases</code></td>
                    <td>array</td>
                    <td>Real-world applications</td>
                </tr>
            </tbody>
        </table>

        <h2>🚀 Rate Limits</h2>
        <p>Currently no rate limits are enforced. For production use, implement rate limiting based on your needs.</p>

        <h2>🔐 Authentication</h2>
        <p>Currently no authentication required. Add authentication middleware for production deployments.</p>

        <div style="margin-top: 3rem; padding: 2rem; background: #f8fafc; border-radius: 8px; text-align: center;">
            <p style="color: #64748b;">
                Built with ❤️ for the cheminformatics community
            </p>
            <p style="color: #94a3b8; margin-top: 0.5rem;">
                <a href="/" style="color: #667eea; text-decoration: none; font-weight: 600;">← Back to Generator</a>
            </p>
        </div>
    </div>
</body>
</html>
`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format');

  if (format === 'json') {
    return NextResponse.json(apiDocumentation);
  }

  return new NextResponse(htmlDocumentation, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
