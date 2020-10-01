"""update_all_models_with_timestamps

Revision ID: e916de74bbcb
Revises: 6dfb606595db
Create Date: 2020-10-01 12:57:19.894899

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e916de74bbcb'
down_revision = '6dfb606595db'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('notebooks', sa.Column('created_at', sa.DateTime(), nullable=False))
    op.add_column('notebooks', sa.Column('updated_at', sa.DateTime(), nullable=False))
    op.add_column('notes', sa.Column('created_at', sa.DateTime(), nullable=False))
    op.add_column('notes', sa.Column('updated_at', sa.DateTime(), nullable=False))
    op.add_column('tags', sa.Column('created_at', sa.DateTime(), nullable=False))
    op.add_column('tags', sa.Column('updated_at', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('tags', 'updated_at')
    op.drop_column('tags', 'created_at')
    op.drop_column('notes', 'updated_at')
    op.drop_column('notes', 'created_at')
    op.drop_column('notebooks', 'updated_at')
    op.drop_column('notebooks', 'created_at')
    # ### end Alembic commands ###