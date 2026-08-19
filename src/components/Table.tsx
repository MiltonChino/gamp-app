import { useState } from 'react';
import { GacetaDocument, gacetaData } from '../data/gacetaData';

interface TableProps {
  documents?: GacetaDocument[];
}

function Table({ documents = gacetaData }: TableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openDescriptionId, setOpenDescriptionId] = useState<number | null>(null);

  const toggleDescription = (id: number) => {
    setOpenDescriptionId(prev => (prev === id ? null : id));
  };

  const filteredDocuments = documents.filter(doc => {
    const term = searchTerm.toLowerCase();
    return (
      doc.titulo.toLowerCase().includes(term) ||
      doc.fecha.toLowerCase().includes(term) ||
      doc.descripcion.toLowerCase().includes(term)
    );
  });

  return (
    <div className="table-component-wrapper my-4">
      {/* Search & Filter Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 gap-3">
        <div className="search-box-wrapper w-100 max-w-400">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="🔍 Buscar por título, fecha o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Buscar documentos"
          />
        </div>
        <div className="text-muted small">
          Mostrando <strong>{filteredDocuments.length}</strong> de {documents.length} documentos
        </div>
      </div>

      {/* Responsive Table */}
      <div className="table-responsive shadow-sm rounded border">
        <table id="myTable" className="table table-striped table-hover align-middle m-0">
          <thead className="thead-dark bg-success text-white">
            <tr>
              <th scope="col" style={{ width: '15%' }}>Fecha</th>
              <th scope="col" style={{ width: '35%' }}>Título</th>
              <th scope="col" style={{ width: '30%' }}>Descripción</th>
              <th scope="col" className="text-center" style={{ width: '20%' }}>Enlace</th>
            </tr>
          </thead>
          <tbody id="table_gaceta">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => {
                const isOpen = openDescriptionId === doc.id;
                return (
                  <tr key={doc.id}>
                    <td data-cell="fecha" className="fw-bold text-secondary">
                      {doc.fecha}
                    </td>
                    <td data-cell="titulo" className="fw-semibold text-dark">
                      {doc.titulo}
                    </td>
                    <td data-cell="descripcion">
                      <div className="dropdown position-relative">
                        <button
                          className="btn btn-success btn-sm dropdown-toggle"
                          type="button"
                          onClick={() => toggleDescription(doc.id)}
                          aria-expanded={isOpen}
                        >
                          Ver Descripción
                        </button>
                        {isOpen && (
                          <div
                            className="dropdown-menu show p-3 shadow-lg border-0 rounded-lg mt-1"
                            style={{
                              position: 'absolute',
                              zIndex: 1050,
                              minWidth: '280px',
                              maxWidth: '420px',
                              whiteSpace: 'normal',
                              background: '#ffffff',
                            }}
                          >
                            <p className="m-0 text-dark small leading-normal">
                              {doc.descripcion}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>
                    <td data-cell="enlace" className="text-center">
                      <a
                        className="btn btn-primary btn-sm px-3 font-weight-bold shadow-sm"
                        href={doc.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                      >
                        Descargar 📥
                      </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-muted">
                  No se encontraron documentos que coincidan con &quot;{searchTerm}&quot;.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;