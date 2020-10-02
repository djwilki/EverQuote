"""add_is_trash_bool

Revision ID: b22211481802
Revises: e916de74bbcb
Create Date: 2020-10-01 18:46:11.022688

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b22211481802'
down_revision = 'e916de74bbcb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('notes', sa.Column('isTrash', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('notes', 'isTrash')
    # ### end Alembic commands ###
